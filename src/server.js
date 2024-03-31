const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3306;

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'A900b1ds',
    database: 'mp4'
});

// Conexión a la base de datos
connection.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos: ', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

// Ruta para obtener la lista de canciones
app.get('/ReactPlayer/canciones', (req, res) => {
    const query = 'SELECT * FROM canciones';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener las canciones: ', err);
            res.status(500).json({ error: 'Error al obtener las canciones' });
            return;
        }
        res.json(results);
    });
});

// Ruta para obtener la lista de videos
app.get('/ReactPlayer/videos', (req, res) => {
    const query = 'SELECT * FROM videos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los videos: ', err);
            res.status(500).json({ error: 'Error al obtener los videos' });
            return;
        }
        res.json(results);
    });
});

// Servir archivos estáticos de canciones
app.use('/canciones', express.static(path.join(__dirname, 'canciones')));

// Servir archivos estáticos de videos
app.use('/videos', express.static(path.join(__dirname, 'videos')));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
