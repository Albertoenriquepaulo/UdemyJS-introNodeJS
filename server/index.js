//ESTAS LINEAS CONFIGURAN EL SERVIDOR LOCAL

// Importar Express
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

const configs = require('./config');



// Esto comentado fue nada mas para probar la conexión
// db.authenticate()
//     .then(() => console.log('DB Connected'))
//     .catch(error => console.log(error)
//     );

const app = express();

// Habilitar PUG
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estática llamada Public
app.use(express.static('public'));

//Validar si estamos en Desarrollo o Produccion
const config = configs[app.get('env')]; //env es una variable que existe en node para detectar el ambiente en el que estamos
//Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;



// Muestra el año actual y genera la ruta
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear(); //fecha actual es como una variable que se puede leer en cualquier lugar, incluso en los templates
    res.locals.ruta = req.path;
    console.log(res.locals);
    return next(); // el next es para que continue ejecutando la próxima función
    //El next también significa que estamos usando el middleware
    //Esto es como decodeURI, realiza las aciones que te digo arriba y después continua
})

// ejecutamos el bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// .use para que reaccione a todos:  get, post, etc
// Cargar las rutas
app.use('/', routes());

// Esztas dos variables que vienen son para HEROKU, el se encarga de asignar
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
/** Puerto y Host para la app */
app.listen(port, host, () => {
    console.log('The Server is Running');
});
console.log('Running in http://localhost:3000/');