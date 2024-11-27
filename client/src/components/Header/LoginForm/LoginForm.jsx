import React, { useState } from "react";
import "../../../styles/components/_LoginForm.scss";

const LoginForm = ({ onClose, onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    onLogin();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Iniciar Sesión</h2>
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
        <button onClick={onClose} className="button close">Cerrar</button>
      </div>
    </div>
  );
};

export default LoginForm;
