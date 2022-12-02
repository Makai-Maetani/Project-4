const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

//UPDATE TO ECN SERVER?
 //npm run devStart
//'mongodb://localhost:27017/blog'
// connect to the database
const url = "mongodb+srv://Makai:Mllmllmll50@cluster0.4nzbgpl.mongodb.net/test"

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  //useCreateIndex: true
});

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

app.use(methodOverride('_method'))



app.get('/', async (req, res) =>{
    const articles = await Article.find().sort({
    createdAt: 'desc'})
    res.render('articles/index', { articles: articles})
})

app.use('/articles', articleRouter)

app.listen(3000,()=> console.log("server running 3000"))