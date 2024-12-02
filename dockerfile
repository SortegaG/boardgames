# Etapa 1: Construcción del frontend
FROM node:16 AS build-frontend

# Establecer el directorio de trabajo para la construcción del frontend
WORKDIR /app/client

# Copiar archivos de configuración del frontend
COPY client/package*.json ./

# Instalar dependencias del frontend
RUN npm install

# Construir la aplicación de React
COPY client/ ./
RUN npm run build

# Etapa 2: Configuración del backend y servidor final
FROM node:16

# Establecer el directorio de trabajo para el backend
WORKDIR /app

# Copiar archivos de configuración del backend
COPY package*.json ./

# Instalar dependencias del backend
RUN npm install

# Copiar el código del backend
COPY / ./

# Copiar los archivos del frontend ya construidos a la carpeta `public` del backend
COPY --from=build-frontend /app/client/dist ./public

# Exponer el puerto (Render utiliza la variable de entorno PORT)
EXPOSE 3000

# Comando de inicio del servidor
CMD ["node", "index.js"]
