import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/_Header.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  // const [decodedToken, setDecodedToken] = useState(null);
  // const [valorCookie, setValorCookie] = useState('');

  // const valor = Cookies.get('token');
  // setValorCookie(valor || '');
  // console.log('cookie:', valorCookie)

  // const decoded = jwtDecode(valor);
  // const userId = decoded.id
  // setDecodedToken(decoded)
  // console.log(userId)

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-items">
          <Link to="/" className="link">Inicio</Link>
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
              <Link to="/profile" className="link">Perfil de Usuario</Link>
              <button onClick={handleLogout} className="button">Logout</button>
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
