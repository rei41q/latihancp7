const userService = require("./user.service");

const createUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const recordUser = await userService.createUser({
      fullname,
      email,
      password,
    });
    return res.json(recordUser);
  } catch (error) {
    res.send(error);
    // return res.status(500).json({ message: "Kesalahan server, silahkan coba lagi nanti" });
  }
};

const userController = {
  createUser,
};

module.exports = userController;
