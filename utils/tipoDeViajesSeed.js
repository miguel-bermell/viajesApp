require("dotenv").config();
const TipoDeViaje = require("../models/TipoViaje");

const tiposDeViaje = [
  {
    nombre: "Familiar",
  },
  {
    nombre: "Trabajo",
  },
  {
    nombre: "Luna de miel",
  },
  {
    nombre: "Ahora Mismo Por Favor",
  },
  {
    nombre: "Aventura",
  },
  {
    nombre: "Cultural",
  },
  {
    nombre: "Deluxury",
  },
  {
    nombre: "Gastronómico",
  },
];

TipoDeViaje.bulkCreate(tiposDeViaje).then(() =>
  console.log("tipo de viajes are loaded")
);
