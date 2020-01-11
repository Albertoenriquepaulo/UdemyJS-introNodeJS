const Viaje = require('../models/Viajes');

exports.mostrarViajes = (req, res) => {
    Viaje.findAll()
        .then((viajes) => res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes // Aqui podriamos solos pasar viajes ya que la propiedad y el valor del objeto tienen el mismo nombre, es decir es lo mismo que "viajes: viajes"
        }))
        .catch((err) => console.log(error));
}

exports.mostrarViajesByID = (req, res) => {
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('oneviaje', { viaje }))
        .catch(error => console.log(error))
}

// Podemos ver la diferencia si compraramos con commit anteriores de la diferencia
// entre usar module.exports y exports