const TipoDeViaje = require("../models/TipoViaje");

exports.findAllTipoDeViajes = async () => {
  return await TipoDeViaje.findAll();
};

exports.findTipoDeViajeById = async (id) => {
  return await TipoDeViaje.findByPk(id);
};

exports.createTipoDeViaje = async (TipoDeViaje) => {
  return await TipoDeViaje.create(TipoDeViaje);
};

exports.updateTipoDeViaje = async (id, TipoDeViajeDetails) => {
  return await TipoDeViaje.update(TipoDeViajeDetails, { where: { id } });
};

exports.deleteTipoDeViaje = async (id) => {
  return await TipoDeViaje.destroy({ where: { id } });
};
