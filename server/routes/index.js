//Esta es la forma de importar contenido hacia este archivo, hay maneras modernas
const express = require('express');
const router = express.Router();

//No es obligatorio que tenga este nombre puede ser cualquiera
// CONTROLADORES, estos cuatro que estan aqui abajo
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function () {

    router.get('/', homeController.consultasHomePage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViajesByID);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    // Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}