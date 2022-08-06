const express = require('express');
const tokenVerification = require("../middleware/token.verification");
const userRouter = express.Router();
const userController = require("./user.controller");
const { User } = require("../database/models");
const e = require('express');


userRouter.get("/users", async (req, res) =>{
  const dataUser = await User.findAll();
  res.json(dataUser);
})


userRouter.post("/user/registration", userController.createUser);

// edit nama user
userRouter.put("/user", tokenVerification, async (req, res) => {
  try {
    const {fullname, email, password } = req.body;
    const authUser = req.auth;

    const checkUser = await User.findOne({
      where:{ email: email }
    })

    if(!checkUser){
    await User.update({
      fullname,
      email,
      password
    },{
      where:{
          id : authUser.id
      }
    })
    return res.send("Update Berhasil");
  }
  else{
    return res.send("Email sudah digunakan, silahkan gunakan email lain");
  }
  } catch (error) {
    return res.status(500).json({ message: "Kesalahan pada server, silahkan coba lagi nanti" });
   }

});
// contoh penggunaan jwt data yang sudah tervalidasi
// adlaah api untuk create post
// userRouter.post("/posts", tokenVerification, (req, res) => {
//   const { title, image, body } = req.body;
//   const authUser = req.auth;

//   const newPost = {
//     title,
//     image,
//     body,
//     user_id: authUser.id,
//   };

//   return res.json(newPost);
// });

module.exports = userRouter;
