const viajeRepository = require("../repositories/viajes");

exports.getPaginate = async (pagination) => {
  const { pageSize = 10, page = 0, sort } = pagination;

  return await viajeRepository.paginate({
    page: +page,
    pageSize: +pageSize,
    sort,
  });
};

exports.search = async (filter) => {
  return await viajeRepository.searchTravel(filter);
};

exports.getAllViajes = async () => {
  return await viajeRepository.findAllViajes();
};

exports.getViajeById = async (id) => {
  return await viajeRepository.findViajeById(id);
};

exports.insertViaje = async (viaje) => {
  if (viaje.estado === "") {
    viaje.estado = 1;
  }
  delete viaje.id;

  if (viaje.oferta === "") {
    viaje.oferta = false;
  }

  await viajeRepository.createViaje(viaje);
};

exports.editViaje = async (viajeId, viajeDetails) => {
  await viajeRepository.updateViaje(viajeId, viajeDetails);
};

exports.removeViaje = async (viajeId) => {
  const viaje = await viajeRepository.findViajeById(viajeId);

  if (!viaje) {
    throw new Error("Viaje not found");
  }

  await viajeRepository.deleteViaje(viajeId);
};
