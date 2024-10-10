const { DataTypes } = require('sequelize');
const  sequelize = require('../db');
const User = require('./User');




const Notify = sequelize.define('Notify', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    UserID: {
        type: DataTypes.UUID,
        reference: {
            model: User,
            key: 'id'
        }
    },
},{
    timestamps: true
});
Notify.belongsTo(User, { foreignKey: 'UserID', as : 'user' });




module.exports =  Notify;
