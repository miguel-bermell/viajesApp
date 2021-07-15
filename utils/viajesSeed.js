require("dotenv").config();

const Viaje = require("../models/Viaje");

const viajes = [
  {
    nombre: "Explorando el Mundo",
    tipoDeViajeId: 5,
    duracion: 45,
    destino: "Vuelta al mundo",
    plazas: 30,
    enOferta: true,
    estado: 2,
  },
  {
    nombre: "Cumple tus Sueños",
    tipoDeViajeId: 8,
    duracion: 5,
    destino: "Galicia",
    plazas: 5,
    enOferta: false,
    estado: 10,
  },
  {
    nombre: "Viaje Estelar",
    tipoDeViajeId: 5,
    duracion: 3,
    destino: "Italia",
    plazas: 8,
    enOferta: false,
    estado: 8,
  },
  {
    nombre: "Viaja Feliz",
    tipoDeViajeId: 6,
    duracion: 2,
    destino: "París",
    plazas: 4,
    enOferta: true,
    estado: 3,
  },
  {
    nombre: "Ruta Ideal",
    tipoDeViajeId: 6,
    duracion: 4,
    destino: "Bali",
    plazas: 12,
    enOferta: false,
    estado: 2,
  },
  {
    nombre: "Turismo de Aventura",
    tipoDeViajeId: 5,
    duracion: 6,
    destino: "Nueva York",
    plazas: 32,
    enOferta: false,
    estado: 8,
  },
  {
    nombre: "Destino de Ensueño",
    tipoDeViajeId: 2,
    duracion: 2,
    destino: "Miami",
    plazas: 4,
    enOferta: true,
    estado: 1,
  },
];

Viaje.bulkCreate(viajes).then(() => console.log("Your viajes are loaded!"));
