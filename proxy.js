const fetch = require('node-fetch');

module.exports = async (req, res) => {
    try {
        // Construir la URL dinámica
        const targetUrl = `https://boardgames-whpq.onrender.com/api${req.path}`;

        // Realizar la solicitud al servidor externo
        const response = await fetch(targetUrl, {
            method: req.method,
            headers: {
                ...req.headers,
                host: undefined, // Evitar conflictos con el encabezado 'host'
            },
            body: req.body ? JSON.stringify(req.body) : undefined,
        });

        const data = await response.text(); // O `response.json()` si esperas un JSON
        res.status(response.status).send(data);
    } catch (error) {
        console.error('Error en el proxy:', error.message);
        res.status(500).send({ error: 'Error en el proxy', details: error.message });
    }
};
