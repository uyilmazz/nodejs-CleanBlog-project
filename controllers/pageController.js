const Post = require('../models/Post');

const getAboutPage = (req,res) => {
    res.render('about');
}

const getAddPostPage = (req,res) => {
    res.render('add_post');
}

const getEditPostPage = async(req,res)=>{
    const post = await Post.findById(req.params.id);
    res.render('edit_post',{post});
}

module.exports = {
    getAboutPage,
    getAddPostPage,
    getEditPostPage,
}