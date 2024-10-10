const { Sequelize }  = require('sequelize');
const config = require('./config/config')


const sequelize = new Sequelize(config.development.database, config.development.username,config.development.password , {
    host: config.development.host,
    port: config.development.port,
    dialect: 'postgres',

});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established succussfully');
        } catch (error) {
           console.error('Database Connection failed')
    }
})();

module.exports = sequelize