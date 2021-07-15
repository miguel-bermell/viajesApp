const express = require("express");
const { IsTokenValid } = require("../middlewares/tokenValid");
const router = express.Router();
const viajeService = require("../services/viaje");

router.get("/", IsTokenValid(), async (req, res) => {
  try {
    const viaje = await viajeService.search(req.query);
    res.status(200).json(viaje);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get(
  "/search:tipoDeViajeId?:nombre?:destino?:pageSize?:page?:sort?",
  IsTokenValid(),
  async (req, res, next) => {
    try {
      const viajes = await viajeService.search(req.query);
      res.status(200).json(viajes);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// router.get(":pageSize?:page?:sort?", async (req, res, next) => {
//   try {
//     const pagination = await viajeService.getPaginate(req.query);
//     res.status(200).json(pagination);
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// });

router.get("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    const viaje = await viajeService.getViajeById(id);
    res.status(200).json(viaje);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", IsTokenValid(), async (req, res) => {
  try {
    await viajeService.insertViaje(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.put("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    await viajeService.editViaje(id, req.body);
    const getViaje = await viajeService.getViajeById(id);

    res.status(200).json(getViaje);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    await viajeService.removeViaje(id);
    res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(400).json({ deleted: error.message });
  }
});

module.exports = router;
