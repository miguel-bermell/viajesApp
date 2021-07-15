const User = require("../models/User");

exports.findAllUsers = async () => {
  return await User.findAll();
};

exports.findUserById = async (id) => {
  return await User.findByPk(id);
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.findUserWithPasswordByEmail = async (email) => {
  return await User.scope("withPassword").findOne({ where: { email } });
};

exports.createUser = async (user) => {
  return await User.create(user);
};

exports.deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};


