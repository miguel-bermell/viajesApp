const { Op } = require("sequelize");
const Viaje = require("../models/Viaje");

exports.paginate = async ({ pageSize, page, sort }) => {
  const offset = pageSize * (page - 1);
  const limit = pageSize;

  let orderBy = "ASC";
  let sortBy = "createdAt";
  const order = [];
  if (sort) {
    sortBy = sort;
    if (sort.includes("-")) {
      orderBy = "DESC";
      sortBy = sort.replace("-", "");
    }
  }

  order.push([sortBy, orderBy]);

  return await Viaje.findAndCountAll({
    limit,
    offset,
    order,
    // include: {
    //   model: TipoDeViaje,
    //   attributes: [["valor", "tipoDeViajeDesc"]],
    // },
  });
};

exports.searchTravel = async (filtro) => {
  const where = {};
  let orderBy = "ASC";
  let sortBy = "createdAt";
  const order = [];
  let offset = 0;
  let limit = 5;

  if (filtro) {
    let { tipoDeViajeId, nombre, destino, pageSize, page, sort } = filtro;

    offset = +pageSize * (page - 1);
    limit = +pageSize;

    if (sort) {
      sortBy = sort;
      if (sort.includes("-")) {
        orderBy = "DESC";
        sortBy = sort.replace("-", "");
      }
    }

    if (tipoDeViajeId) {
      where.tipoDeViajeId = tipoDeViajeId;
    }
    if (nombre) {
      where.nombre = { [Op.like]: `%${nombre}%` };
    }
    if (destino) {
      where.destino = { [Op.like]: `%${destino}%` };
    }
  }

  order.push([sortBy, orderBy]);

  return await Viaje.findAndCountAll({
    where,
    limit,
    offset,
    order,
    // include: {
    //   model: TipoDeViaje,
    //   attributes: [["valor", "tipoDeViajeDesc"]],
    // },
  });
};

exports.findAllViajes = async () => {
  return await Viaje.findAll();
};

exports.findViajeById = async (id) => {
  return await Viaje.findByPk(id);
};

exports.createViaje = async (viaje) => {
  return await Viaje.create(viaje);
};

exports.updateViaje = async (id, viajeDetails) => {
  return await Viaje.update(viajeDetails, { where: { id } });
};

exports.deleteViaje = async (id) => {
  return await Viaje.destroy({ where: { id } });
};
