const { generateToken, validateToken } = require("../config/token");
const { Users } = require("../models");

const signup = async (req, res) => {
  try {
    const existingUser = await Users.findOne({
      where: { email: req.body.email },
    });
    if (existingUser) {
      return res.status(409).send("El correo electrónico ya está registrado");
    }
    await Users.create(req.body);
    res.send("usuario creado exitosamente").status(200);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
    });
    if (!user) return res.sendStatus(401);
    const { id, admin, name, lastName, email } = user;
    user.validatePassword(req.body.password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      else {
        const token = generateToken({
          id,
          admin,
          name,
          lastName,
          email,
        });
        res.cookie("token", token);
        const dataToSend = {
          id: user.id,
          admin: user.admin,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        };
        res.status(200).send(dataToSend);
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = { signup, login };
