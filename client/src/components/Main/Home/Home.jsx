import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/components/_Home.scss";
import Card from "./Card";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { DebounceInput } from 'react-debounce-input';


const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ["estrategia", "clásico", "cartas", "abstracto", "cooperativo"];

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const valor = Cookies.get('token');
        let userId = null;
        let juegosFavoritosId = [];

        if (valor) {
          try {
            const decoded = jwtDecode(valor);
            userId = decoded.id;
          } catch (decodeError) {
            console.error("Error al decodificar el token:", decodeError);
          }
        }

        const gameResponse = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/games/`);
        const juegos = gameResponse.data.juegos;

        if (userId) {
          try {
            const favoriteResponse = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/favorites/${userId}`);
            juegosFavoritosId = favoriteResponse.data.favoritos.map((favorito) => favorito.id_juego);

            juegos.forEach((juego) => {
              juego.es_favorito = juegosFavoritosId.includes(juego.id);  
              if (juego.es_favorito) {
                const favorito = favoriteResponse.data.favoritos.find((favorito) => favorito.id_juego === juego.id);
                juego.id_favorito = favorito?.id_favorito;
              }
            });
          } catch (favoriteError) {
            console.error("Error al obtener los favoritos:", favoriteError);
          }
        }

        setGames(juegos || []);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError("Error al obtener los datos de la API");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Cargando juegos...</p>;
  if (error) return <p>{error}</p>;

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };

  const filteredGames = games.filter((game) => {
    const matchesName = game.nombre.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(game.categoria.toLowerCase());
    return matchesName && matchesCategory;
  });

  return (
    <main className="home-container">
      <h1 className="home-title">Juegos de Mesa</h1>
              <DebounceInput
          minLength={1}
          debounceTimeout={200}
          onChange={(e) => setSearchText(e.target.value)}
          className='input'
          type="text"
          value={searchText}
          placeholder="Busca tu juego" />
      <div className="checkbox-container">
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </div>
      <section className="games-grid">
        {filteredGames.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </section>
    </main>
  );
};

export default Home;
