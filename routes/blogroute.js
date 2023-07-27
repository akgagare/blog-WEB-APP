const express=require('express');
const router=express.Router();

//Import Controller
const {dummyLink}=require("../controllers/dummycontroller");
const {createComment}=require("../controllers/CommentController");
//controller file ka commmentController 
//correct name is CommmentController


const {createPost}=require("../controllers/PostController");

const {getAllPosts}=require("../controllers/PostController");

const {likepost}=require("../controllers/LikeController");

const {unlikePost}=require("../controllers/LikeController");







//mapping eith ontroller
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/create/post",createPost);
router.get("/get/allPost",getAllPosts);
router.post("/likes/like",likepost)
router.post("/likes/unlike",unlikePost);



//export
module.exports=router;
