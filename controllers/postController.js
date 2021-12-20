const Post = require('../models/Post');

const getAllPost = async (req,res) => {

    const page = req.query.page || 1;
    const totalPost = await Post.find().countDocuments();

    const postPerPage = 2;

    const posts = await Post.find()
    .sort('-createdAt')
    .skip((page - 1) * postPerPage)
    .limit(2);

    res.render('index',
    {
        posts,
        currentPage : page,
        totalPage : Math.ceil(totalPost / postPerPage)
    });
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