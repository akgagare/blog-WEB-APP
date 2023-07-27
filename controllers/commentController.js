const Post=require("../models/postmodel");
const Comment=require("../models/commentmodel");

 exports.createComment =async (req,res)=>{
    try{
        //fetch data from req body
        const {post,user,body}=req.body;

        //create a comment object
        const comment=new Comment({
            post,user,body
        });

        //save the new data into DB using save method
        const savedComment=await comment.save();

        //find post using id and add new comment in uss post ka comment vala array

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:  {comments:savedComment._id}},{new:true})

                    .populate("comments")
        //populate:shows the actual object instead of the id that are stored corresponding to that object (object :data)
                    .exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            error:"error while creating comment",
        });
    }
 }