const Sequelize = require('sequelize');


/**
 * Base de Datos usada -> https://remotemysql.com/dashboard.php
 * user: Albertoenriquepaulo@hotmail.com
 * pass:X--------T
 */
module.exports = new Sequelize('ZJkGXV74KD', 'ZJkGXV74KD', 'mPWZ9YhCMk', {
    host: 'remotemysql.com', ///pkg/phpmyadmin/
    port: '3306',
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
