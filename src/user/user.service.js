const bcrypt = require("bcrypt");
const userRepo = require("./user.repo");
const { User } = require("../database/models")

const createUser = async ({ fullname, email, password }) => {
  const hashPassword = await bcrypt.hash(password, 10);

  const checkUser = await User.findOne({
    where:{ email: email }
  })

  if(!checkUser){
  return userRepo.createUser({ fullname, email, password: hashPassword });
  }
  else return "Email sudah digunakan, silahkan gunakan email lain"
};

const userService = {
  createUser,
};

module.exports = userService;
