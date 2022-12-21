const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/productos', require('./src/routes/productos'));

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});