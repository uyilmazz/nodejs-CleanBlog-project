const express = require('express');
const mongoose = require('mongoose');
var methodOverride = require('method-override')
const ejs = require('ejs');

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');
const app = express();

// Database connect
mongoose.connect('mongodb://localhost/cleanblog-test-db',{useNewUrlParser: true,useUnifiedTopology: true});

app.set('view engine','ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method',{
    methods:['POST','GET']
}))

app.get('/',postController.getAllPost);

app.get('/about',pageController.getAboutPage);

app.get('/add_post',pageController.getAddPostPage);

app.get('/posts/:id',postController.getPost);

app.get('/post/edit/:id',pageController.getEditPostPage);

app.post('/posts',postController.addPost);

app.put('/posts/edit/:id',postController.updatePost)

app.delete('/posts/:id',postController.deletePost);


const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Server initialized from ${port} port`);
});