const { User } = require("../database/models");

const createUser = async ({ fullname, email, password }) => {
  return await User.create({
    fullname,
    email,
    password,
  });
};

const userRepo = {
  createUser,
};

module.exports = userRepo;
