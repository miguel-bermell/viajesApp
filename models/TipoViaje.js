const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const TipoDeViaje = dbConnection.define("tipoDeViaje", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

module.exports = TipoDeViaje;
