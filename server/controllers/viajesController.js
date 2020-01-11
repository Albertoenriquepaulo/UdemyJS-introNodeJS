const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes // Aqui podriamos solos pasar viajes ya que la propiedad y el valor del objeto tienen el mismo nombre, es decir es lo mismo que "viajes: viajes"
    });
}

exports.mostrarViajesByID = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id);
    res.render('oneviaje', { viaje });
}

// Podemos ver la diferencia si compraramos con commit anteriores de la diferencia
// entre usar module.exports y exports