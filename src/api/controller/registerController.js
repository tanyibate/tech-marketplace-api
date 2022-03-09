const { createNewUser } = require("../service/userService");

const registerController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const data = { firstName, lastName, email, password };
  createNewUser(data)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(() => {
      res.status(409).send("Could not create user");
    });
};

module.exports = { registerController };
