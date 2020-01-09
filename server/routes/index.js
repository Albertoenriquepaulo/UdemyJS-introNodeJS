//Esta es la forma de importar contenido hacia este archivo, hay maneras modernas
const express = require('express');
const router = express.Router();

module.exports = function () {

    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    });
    return router;
}