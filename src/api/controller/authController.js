const getAuthenticatedUser = async (req, res) => {
  const user = req.user;
  delete user.password;
  res.json(user);
};

module.exports = {
  getAuthenticatedUser,
};
