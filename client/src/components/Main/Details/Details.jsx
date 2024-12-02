import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../../../styles/components/_Details.scss';

const Details = () => {
  const { id } = useParams(); 
  const [gameData, setGameData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchGameData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await axios.get(`http://localhost:3000/api/games/${id}`);
        const juego = response.data.juego;

        setGameData(juego); 
      } catch (e) {
        setError("Hubo un error al obtener los datos del juego.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, [id]);

  if (loading) return <p>Cargando datos del juego...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="details-container">
      <h1>{gameData.nombre}</h1>
      <img src={gameData.imagen_url} alt={gameData.nombre} />
      <p>{gameData.descripcion}</p>
      <p><strong>Categoría:</strong> {gameData.categoria}</p>
      <p><strong>Edad recomendada:</strong> {gameData.edad_recomendada}+</p>
    </div>
  );
};

export default Details;
