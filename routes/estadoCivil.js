const express = require("express");
const router = express.Router();
const estadoCivilService = require("../services/estadoCivil");

router.get("/", async (req, res, next) => {
  try {
    const estados = await estadoCivilService.getAllEstadosCiviles();
    res.status(200).json(estados);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
