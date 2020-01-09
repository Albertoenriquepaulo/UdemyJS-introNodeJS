//ESTAS LINEAS CONFIGURAN EL SERVIDOR LOCAL

// Importar Express
const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express();

// Habilitar PUG
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estática llamada Public
app.use(express.static('public'));

// .use para que reaccione a todos:  get, post, etc
app.use('/', routes());

app.listen(3000);