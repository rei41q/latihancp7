const postService = require("./post.service");


const postUser = async (req, res) => {
    try {
        const { title, image, body } = req.body;
        const authUser = req.auth;
        // const {id}  = req.params;
        // console.log("user id === ". Iduser);
       const createPost = await postService.postService({
            title, 
            image,
            body, 
            authUser})

            return res.status(200).json(createPost);

    } catch (error) {
        return res.status(500).json("Kesalahan pada server, silahkan coba lagi nanti");
    }

//   const createPost = await Post.create({
//     title : title,
//     image : image,
//     body : body,
//     userId : authUser.id
//   }) 
}

const functionPost = {
    postUser
}

module.exports = functionPost;