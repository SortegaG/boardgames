# BoardGames 🎲  

¡Bienvenido a la aplicación de **BoardGames**! Este proyecto está diseñado para facilitar la exploración y el disfrute de tus juegos de mesa favoritos. Con una API personalizada y una interfaz moderna, este proyecto busca ofrecer una experiencia fluida e intuitiva tanto para jugadores casuales como para entusiastas.  

## 🚀 Características  

- 🎮 Navegación por una variedad de juegos de mesa.  
- 🔍 Filtrado y búsqueda para encontrar el juego perfecto.  
- 📝 Detalles completos de cada juego, como descripción, reglas y más.  
- 🌟 Diseño atractivo y responsivo con estilos personalizados en SCSS.  

## 🛠 Tecnologías utilizadas  

### Frontend  
- **React**: Creación de una interfaz interactiva y dinámica.  
- **SCSS**: Estilización avanzada para un diseño moderno y profesional.  
- **JavaScript**: Manejo de la lógica del cliente y componentes.  

### Backend  
- **Express**: Desarrollo de una API robusta para gestionar datos de juegos de mesa.  
- **Node.js**: Plataforma para ejecutar JavaScript en el servidor.  
- **PostgressSQL**: Base de datos de SQL 


### Otros  
- **Axios o Fetch API**: Consumo de la API desde el frontend (si aplica).  
- **JSON**: Almacenamiento y formato de datos.  

## 📂 Estructura del proyecto  
BoardGames/
| ├── client/
│ | ├── src/
│ │ ├── components/ # Componentes reutilizables de React
│ │ ├── styles/ # Archivos SCSS
│ └── package.json # Dependencias del frontend
├── routes/ # Rutas de la API
├── controllers/ # Lógica para gestionar las solicitudes
├── models/ # Estructura de datos (si aplica)
└── index.js # Configuración principal del servidor
├── README.md
└── package.json # Dependencias del proyecto completo


## 🚀 Cómo iniciar el proyecto  

### Prerrequisitos  
Asegúrate de tener instalados:  
- Node.js 
- npm o yarn  

### Pasos  

1. Clona el repositorio:  
   ```bash  
   git clone https://github.com/SortegaG/boardgames.git

2. Instala dependencias:
    ```bash
    npm install  
    cd client  
    npm install  

3. Configura las variables de entorno:
Crea un archivo .env en la carpeta del backend con las siguientes variables: Comprueba el archivo .env.example para conectar a la base de datos postgress
    ```bash
    PORT=3000
    DB_HOST=tu_base_de_datos

4. Abre la aplicación en tu navegador:
    ```bash
    http://localhost:5173

## 📈 Próximas mejoras  

- Implementar autenticación de usuarios.  
- Agregar la posibilidad de dejar reseñas y calificaciones de juegos.  
- Mejorar la accesibilidad para usuarios con discapacidades visuales.  

## 👥 Contribuciones  

¡Las contribuciones son bienvenidas! Si tienes ideas o encuentras errores, por favor crea un issue o envía un pull request.  

## 📄 Licencia  

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.  

    


