//Esta es la forma de importar contenido hacia este archivo, hay maneras modernas
const express = require('express');
const router = express.Router();

//No es obligatorio que tenga este nombre puede ser cualquiera
// CONTROLADORES, estos dos que estan aqui abajo
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
module.exports = function () {

    router.get('/', homeController.consultasHomePage);

    router.get('/nosotros', nosotrosController.infoNosotros);

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
        Testimonial.findAll()
            .then(testimoniales => res.render('testimoniales', {
                pagina: 'Testimoniales',
                testimoniales: testimoniales
            }))

    });

    // Cuando se llena el formulario
    router.post('/testimoniales', (req, res) => {
        // Para que el request.body pueda funcionar debe estar en el package.json
        // La dependcia "body-parser": "^1.19.0",
        // Y en el index.js el -> | const bodyParser = require('body-parser');|
        console.log(req.body);
        // Validar que todos los campos estén llenos
        // Considerar que estos nombres son los que aparecen el html (testimoniales/index.pug)
        // En la propiedad name de los inputs
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
            res.render('testimoniales', {
                errores,
                nombre,
                correo,
                mensaje
                // Pasamos nombre, correo, mensaje para que en caso que ocurra error 
                //no se pierda la info ya colocada por el usuario
                // Y asi colocamos en en cada input del html en el campo value cada uno
                //de estas variables
            })
        } else {
            // almacenar en el BD
            Testimonial.create({
                nombre,
                correo,
                mensaje
            })
                .then(testimoniales => res.redirect('/testimoniales'))
                .catch(error => console.log(error))
        }

    });

    return router;
}