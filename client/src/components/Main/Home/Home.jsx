import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/components/_Home.scss";
import Card from "./Card";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ["estrategia", "clásico", "cartas", "abstracto", "cooperativo"];

  useEffect(() => {

    const valor = Cookies.get('token');
    const decoded = jwtDecode(valor);
    const userId = decoded.id

    const fetchGames = async () => {
      try {
        const gameResponse = await axios.get("http://localhost:3000/api/games/");
        const favoriteResponse = await axios.get(`http://localhost:3000/api/favorites/${userId}`);

        const juegosFavoritosId = favoriteResponse.data.favoritos.map((favorito) => favorito.id_juego)

        const games = gameResponse.data.juegos.map((juego) => {
          
          const es_favorito = juegosFavoritosId.includes(juego.id)

          const juegoModificado = {...juego, es_favorito}
            if (es_favorito) {
              const favorito = favoriteResponse.data.favoritos.find(favorito => favorito.id_juego === juego.id );
              juegoModificado.id_favorito = favorito.id_favorito
            }

            return juegoModificado
          })


        setGames(games || []);
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
    <div className="home-container">
      <h1 className="home-title">Juegos de Mesa</h1>
      <input type="text" value={searchText} onChange={ (e) => setSearchText(e.target.value)}></input>
      <div>
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
        <div className="games-grid">
        {filteredGames.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Home;
