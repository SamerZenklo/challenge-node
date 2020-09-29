const mongoose = require('mongoose')
const Schema = mongoose.Schema


const articleSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1
    },
    message :{
        type:String,
        required:true,
        minlength:1
    }
},{timestamps:true})
const Article = mongoose.model('Article',articleSchema)

module.exports ={
    Article
}