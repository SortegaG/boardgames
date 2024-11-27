import React, { useState } from "react";
import "../../../styles/components/_Header.scss";

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellidos"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
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
          <button type="submit" className="button">Registrarse</button>
        </form>
        <button onClick={onClose} className="button close">Cerrar</button>
      </div>
    </div>
  );
};

export default RegisterForm;
