const Post=require("../models/postmodel");
const Like=require("../models/likemodel");

exports.likepost=async(req,res)=>{
    try{
        const {post,user}=req.body;

        const like=new Like({
            post,user
        });
        const savedLike=await like.save();

        //update post collection 
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})

        .populate("likes")
        .exec()

        res.json({
            post:updatedPost,
        });


    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            error:"Error while liking",
        });
    }
}
exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;

        const deleteLike=await Like.findByIdAndDelete({post:post,_id:like});

        const updatedPost=await Post.findByIdAndUpdate(post,{$pull: {likes:deleteLike._id}},{new:true});

        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"error while unliking "
        });
    }
}