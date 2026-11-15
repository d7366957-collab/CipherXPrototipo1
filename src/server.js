const express = require('express');
const app = express();

app.use(express.json());

// Ruta de prueba para saber que el servidor está vivo
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', platform: 'CipherX', timestamp: new Date() });
});

module.exports = app;
