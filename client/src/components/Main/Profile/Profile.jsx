import React, { useEffect, useState } from "react";
//import axios from "axios";
// import "../../../styles/components/_Home.scss";
// //import FavCard from "./";
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
    console.log('cookie:', valor)

    const decoded = jwtDecode(valor);
    const userEmail = decoded.email
    setDecodedToken(decoded)
    console.log(userEmail)
  }, []);


  // if (loading) return <p>Cargando juegos...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <>
     {/* <div className="home-container">
       <h1 className="home-title">Juegos de Mesa</h1>
       <div className="games-grid">
         {games.map((game) => (
          <FavCard key={game.id_juego} game={game} />
        ))}
      </div>
    </div> */}
    <h1>Hola</h1>
    {/* <p>{decodedToken}</p> */}
    </>
  );
};

export default Profile;
