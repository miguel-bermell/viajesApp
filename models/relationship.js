const dbConnection = require("../config/db");
const Viaje = require("../models/Viaje");
const TipoDeViaje = require("../models/TipoViaje");
const Cliente = require("./Cliente");
const EstadoCivil = require("./EstadoCivil");
const User = require("./User");
const loadModels = () => {
  TipoDeViaje.hasMany(Viaje, {
    foreignKey: {
      allowNull: false,
    },
  });
  Viaje.belongsTo(TipoDeViaje);
  EstadoCivil.hasMany(Cliente, {
    foreignKey: {
      allowNull: false,
    },
  });
  Cliente.belongsTo(EstadoCivil);
};

dbConnection.sync({}).then(() => console.log("db models loaded"));

module.exports = loadModels;
