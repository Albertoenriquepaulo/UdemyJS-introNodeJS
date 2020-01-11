// Para exportar multiples porciones y no tener que importar todo el archivo

exports.infoNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
}
