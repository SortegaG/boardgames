import { useState } from "react";
import axios from "axios";
import "../../../styles/components/_Header.scss";

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    fecha_nacimiento: "",
    email: "",
    contraseña: "",
  });

  const [error, setError] = useState(null); 
  const [success, setSuccess] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.fecha_nacimiento) {
      setError("La fecha de nacimiento es obligatoria.");
      return;
    }

    const formattedDate = new Date(formData.fecha_nacimiento).toISOString().split('T')[0];

    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        ...formData,
        fecha_nacimiento: formattedDate
      });

      console.log("Respuesta del servidor:", response.data);

      setSuccess(true);
      console.log("Usuario registrado con éxito");
      onClose(); // Cerrar el modal si todo sale bien

    } catch (err) {
      console.error("Error en el registro:", err);
      setError(err.response?.data?.message || "Error al registrar el usuario. Inténtalo de nuevo.");
    }
};

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Registrarse</h2>
        {error && <p className="error-message">{error}</p>} {/* Mostrar errores */}
        {success && <p className="success-message">¡Registro exitoso!</p>} {/* Mostrar éxito */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
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
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
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
