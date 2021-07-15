const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const EstadoCivil = dbConnection.define(
  "estadoCivil",
  {
    id: {
      type: DataTypes.TINYINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "estadosCiviles",
  }
);

module.exports = EstadoCivil;
