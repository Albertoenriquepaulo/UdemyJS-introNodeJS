//ESTAS LINEAS CONFIGURAN EL SERVIDOR LOCAL

// Importar Express
const express = require('express')
// Configurar Express
const app = express();
app.use('/', (req, res) => {
    res.send('NodeJS: Hi World ');
});

app.listen(3000);