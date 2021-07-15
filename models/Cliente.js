const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Cliente = dbConnection.define("Cliente", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  dni: {
    type: DataTypes.STRING,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  estadoCivilId: {
    type: DataTypes.TINYINT,
    defaultValue: 99,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  fechaSalida: {
    type: DataTypes.DATE,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
  },
});

module.exports = Cliente;
