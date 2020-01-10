//Esta es la forma de importar contenido hacia este archivo, hay maneras modernas
const express = require('express');
const router = express.Router();

// Los modelos retornan siempre un promise
const Viaje = require('../models/Viajes')

module.exports = function () {

    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    });

    router.get('/viajes', (req, res) => {
        Viaje.findAll()
            .then((viajes) => res.render('viajes', {
                pagina: 'Próximos Viajes',
                viajes // Aqui podriamos solos pasar viajes ya que la propiedad y el valor del objeto tienen el mismo nombre, es decir es lo mismo que "viajes: viajes"
            }))
            .catch((err) => console.log(error));
    });

    router.get('/viajes/:id', (req, res) => {
        Viaje.findByPk(req.params.id)
            .then(viaje => res.render('oneviaje', { viaje }))
            .catch(error => console.log(error))
    });

    router.get('/testimoniales', (req, res) => {
        res.render('testimoniales', {
            pagina: 'Testimoniales'
        });
    });

    // Cuando se llena el formulario
    router.post('/testimoniales', (req, res) => {
        // Para que el request.body pueda funcionar debe estar en el package.json
        // La dependcia "body-parser": "^1.19.0",
        // Y en el index.js el -> | const bodyParser = require('body-parser');|
        console.log(req.body);
        // Validar que todos los campos estén llenos
        let { nombre, correo, mensaje } = req.body;
        let errores = [];
        if (!nombre) {
            errores.push({ 'mensaje': 'Agrega tu nombre' });
        }
        if (!correo) {
            errores.push({ 'mensaje': 'Agrega tu correo' });
        }
        if (!mensaje) {
            errores.push({ 'mensaje': 'Agrega tu mensaje' });
        }

        //Revisar por errores
        if (errores.length > 0) {
            // muestra la vista con errores

        } else {
            // almacenar en el BD
        }

    });

    return router;
}