import React, { useEffect, useState } from "react";
//import uuid4 from "uuid4";
import axios from "axios";
// import "../../../styles/components/_Home.scss";
import Card from "../Home/Card";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';


const Profile = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const valor = Cookies.get('token');
    const decoded = jwtDecode(valor);
    const userId = decoded.id

    const fetchGames = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/proxy/favorites/${userId}`);

        const favoritos = response.data.favoritos.map((favorito) => { return {...favorito, es_favorito: true}})

        setGames(favoritos || []);
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
       <h1 className="home-title">Tus favoritos</h1>
       <div className="games-grid">
         {games.map((game) => (
          <Card key={game.id} game={game}/>
        ))}
      </div>
    </div> }
    </>
  );
};

export default Profile;
