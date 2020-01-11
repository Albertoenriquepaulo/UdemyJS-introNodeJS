// Los modelos retornan siempre un promise
// Esto es lo que le dice de dond debe traerse los datos
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = (req, res) => {
    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3
    }));

    promises.push(Testimonial.findAll({
        limit: 3
    }));

    //Pasar el promise y ejecutarlo
    const resultado = Promise.all(promises);

    resultado.then((resultado) => res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    }))
        .catch((err) => console.log(error));
}