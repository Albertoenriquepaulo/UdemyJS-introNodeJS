// Se recomienda crear el nombre de los modelos con la priemra letra en mayúscula
const Sequelize = require('sequelize');
/**
 * Base de Datos usada -> https://remotemysql.com/dashboard.php
 * user: Albertoenriquepaulo@hotmail.com
 * pass:X--------T
 */
const db = require('../config/database');

//Mensaje en consola que me indica si está o no conectado
db.authenticate()
    .then(() => console.log('DB CONECTED...!!!'))
    .catch(error => console.log(error));
// Definimos el modelo
// info -> https://sequelize.org/v5/manual/models-definition.html
// los nombres aqui usados deben ser identicos a los de la BD
const Viaje = db.define('viaje', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },

});
module.exports = Viaje;