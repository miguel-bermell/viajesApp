require("dotenv").config();
var express = require("express");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const tipoDeViajeRouter = require("./routes/tipoDeViaje");
const viajesRouter = require("./routes/viajes");
const clientesRouter = require("./routes/clients");
const estadosCivilesRouter = require("./routes/estadoCivil");

const loadModels = require("./models/relationship");
const tokenValidation = require("./middlewares/tokenValidation");
var app = express();
loadModels();
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use(tokenValidation);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/viajes/tipodeviaje", tipoDeViajeRouter);
app.use("/viajes", viajesRouter);
app.use("/clientes", clientesRouter);
app.use("/estadosCiviles", estadosCivilesRouter);

module.exports = app;
