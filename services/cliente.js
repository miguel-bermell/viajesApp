const clienteRepository = require("../repositories/cliente");

exports.getAllClientes = async () => {
  return await clienteRepository.findAllClientes();
};

exports.getClienteById = async (id) => {
  return await clienteRepository.findClienteById(id);
};

exports.insertCliente = async (cliente) => {
  delete cliente.id;
  await clienteRepository.createCliente(cliente);
};

exports.editCliente = async (clienteId, clienteDetails) => {
  await clienteRepository.updateCliente(clienteId, clienteDetails);
};

exports.removeCliente = async (clienteId) => {
  const cliente = await clienteRepository.findClienteById(clienteId);

  if (!cliente) {
    throw new Error("Viaje not found");
  }

  await clienteRepository.deleteCliente(clienteId);
};
