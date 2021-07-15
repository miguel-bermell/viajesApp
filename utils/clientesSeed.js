require("dotenv").config();
const Cliente = require("../models/Cliente");

const clientes = [
  {
    nombre: "Ataulfo",
    apellidos: "Papa",
    direccion: "Calle falsa, 1, 2 ,3",
    telefono: "666555333",
    dni: "55544433a",
    email: "ataulto@papadopoulus.com",
    fechaNacimiento: "1965-10-15",
    estadoCivilId: 2,
  },
  {
    nombre: "Hermenegildo",
    apellidos: "Lores de Cabeza",
    direccion: "Calle la piruleta, 23",
    telefono: "777666555",
    dni: "11122233b",
    email: "ataulto2@papadopoulus.com",
    fechaNacimiento: "1925-5-28",
    estadoCivilId: 3,
  },
  {
    nombre: "Gertrudis",
    apellidos: "Fuensanta",
    direccion: "Calle Algarroba, 3 24B",
    telefono: "666444222",
    dni: "66688844h",
    email: "gertrudis@gmail.com",
    fechaNacimiento: "1905-1-1",
  },
  {
    nombre: "Manolo",
    apellidos: "Ruiz",
    dni: "28977455-K",
    telefono: "684789982",
    direccion: "Calle rodolfo",
    fechaNacimiento: "1995-5-2",
    estadoCivilDesc: "Soltero",
    email: "manolo@test.com",
  },
  {
    nombre: "Pedro",
    apellidos: "Calvo",
    dni: "28977335-C",
    telefono: "684789722",
    direccion: "Calle pepito",
    fechaNacimiento: "1991-3-2",
    estadoCivilDesc: "Casado",
    email: "pedro@test.com",
  },
  {
    nombre: "Miguel",
    apellidos: "ConPelo",
    dni: "28977855-K",
    telefono: "682389982",
    direccion: "Calle miguelito",
    fechaNacimiento: "1992-11-24",
    estadoCivilDesc: "Casado",
    email: "miguel@test.com",
  },
];

Cliente.bulkCreate(clientes).then(() => console.log("Clientes creados"));
