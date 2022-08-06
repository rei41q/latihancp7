const express = require('express');
const { Post } = require("../database/models")
const postRouter = express.Router();
const authUser = require("../auth/auth.route");
const tokenVerification = require('../middleware/token.verification');
const postController = require("./post.controller");
postRouter.use(express.json());

 postRouter.post("/posts", tokenVerification, (postController.postUser))

postRouter.get("/posts", async (req, res) =>{
    const getAllPost = await Post.findAll();
    return res.json(getAllPost) 
})

postRouter.get("/posts/:postID", async (req, res) =>{
    const {postID}   = req.params;
    const getOnePost = await Post.findByPk(postID);
    return res.json(getOnePost) 
})

postRouter.put("/posts/:postID", tokenVerification, async (req, res) =>{
   try {
    const { postID }   = req.params;
    const {title, image, body} = req.body

    const UpdatePost = await Post.update({
        title: title,
        image: image,
        body: body
    },
    {
        where:{
            id: postID
        }
    }
    );
    if(UpdatePost)
    return res.json("update berhasil") 
    else
    return res.json("Post ID tidak ada, silahkan masukan post ID yang tersedia") 
   } catch (error) {
    return res.status(500).send("Kesalahan pada server, silahkan coba lagi nanti") 
   }
  
})


module.exports = postRouter;
