const mongoose=require("mongoose");



//route handler

const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" ,//refernce of other model
    },
    user:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model("Like",likeSchema);

