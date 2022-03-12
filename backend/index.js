const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

// Crear el servidor
const app = express();

// Conectar BD
conectarDB()

console.log("Comenzando")

// Habilitar Cors
const opcionesCors = {
    origin: process.env.FRONTEND_URL
}
app.use(cors(opcionesCors))

// Puerto de la APP
const port = process.env.PORT || 4000;

// Habilitar leer los valores 
app.use(express.json());

// Habilitar carpeta publica
app.use(express.static('uploads'))


// Rutas de la APP
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/enlaces', require('./routes/enlaces'))
app.use('/api/archivos', require('./routes/archivos'))

// Arrancar la APP
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en http://localhost:${port}`)
})