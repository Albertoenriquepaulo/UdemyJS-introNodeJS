const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });


/**
 * Base de Datos usada -> https://remotemysql.com/dashboard.php
 * user: Albertoenriquepaulo@hotmail.com
 * pass:X--------T
 */
module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST, ///pkg/phpmyadmin/
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    //operatorsAliases: false
});


// BD MySQL NAS, descomentamos la de arriba y tenemos la BD remotemysql.com
// module.exports = new Sequelize('agenciadeviajes', 'alberto', '1234', {
//     host: '192.168.1.130', ///pkg/phpmyadmin/
//     port: '3306',
//     dialect: 'mysql',
//     define: {
//         timestamps: false
//     },
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     //operatorsAliases: false
// });
