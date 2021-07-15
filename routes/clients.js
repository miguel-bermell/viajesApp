const express = require("express");
const { IsTokenValid } = require("../middlewares/tokenValid");
const router = express.Router();
const clienteService = require("../services/cliente");

router.get("/", IsTokenValid(), async (req, res) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await clienteService.getClienteById(id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", IsTokenValid(), async (req, res) => {
  try {
    console.log(req.body);
    await clienteService.insertCliente(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.put("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    await clienteService.editCliente(id, req.body);
    const getCliente = await clienteService.getClienteById(id);

    res.status(200).json(getCliente);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    await clienteService.removeCliente(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ deleted: error.message });
  }
});

module.exports = router;
