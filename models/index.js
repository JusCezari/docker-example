const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const config = {
    "database": process.env.DATABASE_NAME,
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql",
    "define": {
        "timestamps": true,
        "underscored": true
    }
};

let sequelize;
if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Drop all the tables and recreate database
// sequelize.sync();
sequelize.sync({force: true});

let db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;