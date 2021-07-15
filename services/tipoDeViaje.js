const tipoDeViajeRepository = require("../repositories/tipoDeViaje");

exports.getAllTiposViaje = async () => {
  return await tipoDeViajeRepository.findAllTipoDeViajes();
};

exports.getTiposViajeById = async (id) => {
  return await tipoDeViajeRepository.findTipoDeViajeById(id);
};

exports.insertTipoViaje = async (viaje) => {
  await tipoDeViajeRepository.createTipoDeViaje(viaje);
};

exports.editTipoViaje = async (tipoId, tipoViajeDetails) => {
  await tipoDeViajeRepository.updateTipoDeViaje(tipoId, tipoViajeDetails);
};

exports.removeTipoViaje = async (tipoId) => {
  const viaje = await tipoDeViajeRepository.findTipoDeViajeById(tipoId);

  if (!viaje) {
    throw new Error("Viaje not found");
  }

  await tipoDeViajeRepository.deleteTipoDeViaje(tipoId);
};
