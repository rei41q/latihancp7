const { Post } = require("../database/models")

const createPost = async ({title, image,body, authUser}) => {
   return await Post.create({
            title : title,
            image : image,
            body : body,
            userId : authUser.id}
        )
}

const functionPostRepo = {
    createPost,
}

module.exports = functionPostRepo;