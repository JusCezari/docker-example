const uuidv4 = require('uuid/v4');
module.exports = function (sequelize, DataTypes) {

    let Person = sequelize.define("Person", {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            }
        },
        {
            tableName: 'person'
        });

    return Person;
};