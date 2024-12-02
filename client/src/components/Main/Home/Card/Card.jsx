import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const Card = ({ game }) => {
  const navigate = useNavigate();

  let userId = null;
  const valor = Cookies.get('token');

  if (valor) {
    try {
      const decoded = jwtDecode(valor);
      userId = decoded.id;
    } catch (decodeError) {
      console.error("Error al decodificar el token:", decodeError);
    }
  }

  const handleDetailsClick = () => {
    navigate(`/games/${game.id}`);
  };

  const handleAñadirFavoritoClick = async () => {
    if (!userId) {
      console.warn("No se puede añadir a favoritos: usuario no autenticado.");
      return;
    }
    try {
      await axios.post("http://localhost:3000/api/favorites", { id_usuario: userId, id_juego: game.id });
      window.location.reload();
    } catch (err) {
      console.error("Error al añadir a favorito:", err);
    }
  };

  const handleQuitarFavoritoClick = async (id) => {
    if (!userId) {
      console.warn("No se puede quitar de favoritos: usuario no autenticado.");
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/api/favorites/${id}`);
      window.location.reload();
    } catch (err) {
      console.error("Error al quitar favorito:", err);
    }
  };

  return (
    <article className="game-card">
      <h3>{game.nombre}</h3>
      <img src={game.imagen_url} alt={game.nombre} /> 
      <p>{game.descripcion}</p>
      <p>
        <strong>Categoría:</strong> {game.categoria}
      </p>
      <p>
        <strong>Edad recomendada:</strong> {game.edad_recomendada}+
      </p>
      <p>
        <strong>Jugadores:</strong> {game.jugadores_min} - {game.jugadores_max}
      </p>
      <button className="btn" onClick={handleDetailsClick}>
        Detalles
      </button>
      {userId && game.es_favorito ? (
        <button className="btn" onClick={() => handleQuitarFavoritoClick(game.id_favorito)}>
          Quitar favorito
        </button>
      ) : (
        userId && (
          <button className="btn" onClick={handleAñadirFavoritoClick}>
            Añadir a favorito
          </button>
        )
      )}
    </article>
  );
};

export default Card;
