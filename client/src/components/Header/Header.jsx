import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/_Header.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import Cookies from 'js-cookie';


const Header = () => {
  const valor = Cookies.get('token');

  const [isAuthenticated, setIsAuthenticated] = useState(valor);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = async () => {

    try {
      await axios.get("http://localhost:3000/api/auth/logout");

      setIsAuthenticated(false)
    } catch (err) {
      console.error("Error en el logout:", err);
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-items">
          <button className="button"><Link to="/" className="link">Home</Link></button>
          {!isAuthenticated ? (
            <>
              <button onClick={() => setShowRegister(true)} className="button"> 
                Registrarse
              </button>
              <button onClick={() => setShowLogin(true)} className="button">
                Login
              </button>
            </>
          ) : (
            <>
              <button className="button"> <Link to="/profile" className="link">Perfil de Usuario</Link></button>
              <button  onClick={handleLogout} className="button">Logout</button>
            </>
          )}
        </div>
      </header>

      {/* Mostrar LoginForm si showLogin es true */}
      {showLogin && (
        <LoginForm onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}

      {/* Mostrar RegisterForm si showRegister es true */}
      {showRegister && (
        <RegisterForm onClose={() => setShowRegister(false)} />
      )}
    </>
  );
};

export default Header;
