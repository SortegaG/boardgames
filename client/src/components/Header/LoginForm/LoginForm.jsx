import React, { useState } from "react";
import axios from "axios";
import "../../../styles/components/_LoginForm.scss";

const LoginForm = ({ onClose, onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(`Campo actualizado: ${name}, Nuevo valor: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    try {
      console.log("Iniciando solicitud a la API...");
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      console.log("Respuesta completa del servidor:", response);

      if (response.data.success) {
        console.log("Inicio de sesión exitoso.");
        setErrorMessage(""); 
        onLogin(); 
        onClose(); 
      } else {
        console.log("Credenciales incorrectas.");
        setErrorMessage("Correo electrónico o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);

      if (error.response && error.response.data && error.response.data.msg) {
        setErrorMessage(error.response.data.msg); 
      } else {
        setErrorMessage("Ocurrió un error al iniciar sesión. Inténtalo más tarde.");
      }
    }
  };

  const handleClose = () => {
    setErrorMessage(""); // Limpia el mensaje de error al cerrar
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Iniciar Sesión</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="button">Iniciar Sesión</button>
        </form>
        <button onClick={handleClose} className="button close">Cerrar</button>
      </div>
    </div>
  );
};

export default LoginForm;
