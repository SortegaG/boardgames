import React, { useEffect, useState } from "react";
//import uuid4 from "uuid4";
import axios from "axios";
// import "../../../styles/components/_Home.scss";
import FavCard from "./FavCard";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';


const Profile = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);
  const [valorCookie, setValorCookie] = useState('');

  useEffect(() => {

    const valor = Cookies.get('token');
    setValorCookie(valor || '');
    console.log('cookie:', valorCookie)

    const decoded = jwtDecode(valor);
    const userId = decoded.id
    setDecodedToken(decoded)
    console.log(userId)

    const fetchGames = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/favorites/${userId}`);
        console.log("Respuesta de la API:", response.data);

        setGames(response.data.Favoritos || []);
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

  return (
    <>
      {<div className="home-container">
       <h1 className="home-title">Lista de favoritos</h1>
       <div className="games-grid">
         {games.map((game) => (
          <FavCard key={game.id_juego} game={game} />
        ))}
      </div>
    </div> }
    </>
  );
};

export default Profile;
