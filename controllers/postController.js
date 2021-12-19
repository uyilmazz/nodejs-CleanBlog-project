const Post = require('../models/Post');

const getAllPost = async (req,res) => {
    const posts = await Post.find();
    res.render('index',{posts});
}

const getPost = async(req,res) => {
    const post = await Post.findById(req.params.id);
    res.render('post',{post});
}

const addPost = async(req,res) => {
    await Post.create(req.body);
    res.redirect('/')
}

const updatePost = async(req,res) => {
    const post = await Post.findById(req.params.id);

    if(post){
        await Post.findByIdAndUpdate(req.params.id,{title:req.body.title,detail:req.body.detail});
        res.redirect(`/posts/${req.params.id}`);
    }else{ 
        res.redirect('/');
    }
}

const deletePost = async(req,res) => {
    const post = await Post.findById(req.params.id);
    if(post){
        await Post.findByIdAndDelete(req.params.id);   
    }
    res.redirect('/');
}


module.exports = {
    getAllPost,
    getPost,
    addPost,
    updatePost,
    deletePost
}