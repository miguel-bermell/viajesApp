const express = require("express");
const router = express.Router();
const tipoDeViaje = require("../services/tipoDeViaje");

router.get("/", async (req, res) => {
  try {
    const tipoViaje = await tipoDeViaje.getAllTiposViaje();
    res.status(200).json(tipoViaje);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tipoViaje = await tipoDeViaje.getTiposViajeById(id);
    res.status(200).json(tipoViaje);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    await tipoDeViaje.insertTipoViaje(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tipoDeViaje.editTipoViaje(id, req.body);
    const tipoViaje = await tipoDeViaje.getTiposViajeById(id);

    res.status(200).json(tipoViaje);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tipoDeViaje.removeTipoViaje(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
