const express = require("express");
const router = express.Router();
const userService = require("../services/user");
const roleValidation = require("../middlewares/roleValidation");
const { ROLE } = require("../utils/constants");
const { IsTokenValid } = require("../middlewares/tokenValid");

router.get("/me", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await userService.getUserProfile(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/", IsTokenValid(), async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    await userService.signUp(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.delete(
  "/:id",
  IsTokenValid(),
  roleValidation(ROLE.USER),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = userService.getUserProfile(id);
      if (!user) throw new Error("User not found");
      await userService.removeUser(id);

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
);

module.exports = router;
