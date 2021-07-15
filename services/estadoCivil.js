const estadoCivilRepository = require("../repositories/estadoCivil");

exports.getAllEstadosCiviles = async () => {
  return await estadoCivilRepository.findAllEstadosCiviles();
};
