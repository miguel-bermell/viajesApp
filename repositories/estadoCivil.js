const EstadoCivil = require("../models/EstadoCivil");

exports.findAllEstadosCiviles = async () => {
  return await EstadoCivil.findAll();
};
