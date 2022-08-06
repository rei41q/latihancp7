const PostRepo = require("./post.repo")

const postService = async ({title, image,body, authUser}) =>{
    return await PostRepo.createPost(
        {
        title, 
        image, 
        body, 
        authUser
    });
} 

const FunctionPostService = {
    postService
}

module.exports = FunctionPostService;