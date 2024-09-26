const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => {
    res.send('¡API en funcionamiento!');
});

// Aquí puedes agregar más endpoints según tus necesidades

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
