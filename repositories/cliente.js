const Cliente = require("../models/Cliente");
const EstadoCivil = require("../models/EstadoCivil");
const dbConnection = require("../config/db");
exports.findAllClientes = async () => {
  // return await Cliente.findAll(
  //   {
  //     attributes: ["id", "nombre", "dni", "telefono"],
  //     include: {
  //       model: EstadoCivil,
  //       attributes: [["descripcion", "estadoCivilDesc"]],
  //     },
  //   },
  //   {
  //     raw: true,
  //   }
  // );
  return await dbConnection.query(
    "SELECT clientes.id, nombre,dni, telefono, descripcion as estadoCivilDesc from `clientes` inner join `estadosciviles` on clientes.estadoCivilId = estadosciviles.id",
    { type: dbConnection.QueryTypes.SELECT }
  );
};

exports.findClienteById = async (id) => {
  return await Cliente.findByPk(id);
};

exports.createCliente = async (cliente) => {
  return await Cliente.create(cliente);
};

exports.updateCliente = async (id, clienteDetails) => {
  return await Cliente.update(clienteDetails, { where: { id } });
};

exports.deleteCliente = async (id) => {
  return await Cliente.destroy({ where: { id } });
};
