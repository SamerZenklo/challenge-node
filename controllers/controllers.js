const { Article } = require("../models/Article")

const getHomepage =  (req,res)=>{
    if (req.method === "GET") {
        Article.find()
            .then((result) => res.render('index', {data: result}))
            .catch((err) =>console.log(err))
    } else {
        const article = new Article(req.body)
        article.save()
            .then(() => res.redirect('/'))
            .catch(err => console.log(err))
    }
    
    
}
const one_post = (req, res) => {
    Article.findById(req.params.id)
        .then((result) => res.render('onePage', {article: result}))
}
const delete_post = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
}

const update_post = (req, res) => {
    

    Article.findByIdAndUpdate({_id: req.params.id})
        .then((result) => {
            result.name = req.body.name
            result.message = req.body.message
            result.save()
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

module.exports = {
    getHomepage,
    delete_post,
    one_post,
    update_post
}