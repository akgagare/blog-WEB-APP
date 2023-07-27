const Post=require("../models/postmodel");

exports.createPost= async(req,res)=>{
    try{
    //take the data from user
    const {title,body}=req.body;

    //create the object of that data
    const post=new Post({
        title,body
    })

    const savedPost=await post.save();

    res.json({
        post:savedPost,
    });
    }
catch(error){
    console.log(error);
    return res.status(400).json({
        error:"Error while creating a post "
    });

}
}

exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("comments").exec();
        res.json({
            posts
        })

        //for displaying actual data of likes and comments we used populate 
        //agar nhi use karte toh fi unki sfir ids display hoti 
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            error:"could not fetch all posts"
        })
    }
}
