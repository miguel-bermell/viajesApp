const userRepository = require("../repositories/user");
const { signToken } = require("./jwtService");

exports.getAllUsers = async () => {
  return await userRepository.findAllUsers();
};

exports.getUserProfile = async (id) => {
  const user = await userRepository.findUserById(id);
  return user.toJSON();
};

exports.signUp = async (userData) => {
  await userRepository.createUser(userData);
};

exports.login = async (email, password) => {
  if (!email || !password) throw new Error("Invalid data provided");
  const user = await userRepository.findUserWithPasswordByEmail(email);

  if (!user) throw new Error("User not found");

  if (user.password !== password) throw new Error("Invalid password");
  const token = signToken({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });

  const usuario = {
    bearer: token,
    id: user.id,
    email: user.email,
    role: user.role,
    nombre: user.name,
  };
  return usuario;
};

exports.removeUser = async (id) => {
  if (!id) throw new Error("User not found");

  await userRepository.deleteUser(id);
};
