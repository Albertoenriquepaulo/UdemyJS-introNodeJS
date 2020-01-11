// Los modelos retornan siempre un promise
// Esto es lo que le dice de dond debe traerse los datos
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimonial.findAll({ limit: 3 });

    res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    });
}