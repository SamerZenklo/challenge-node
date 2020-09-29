const express = require('express')
  
const app = express()
// const path = require('path')
const router = require('./config/router')
require('./config/mongoose')
app.use(express.static('public'))
app.set('view engine','ejs')


app.use(express.urlencoded({extended:true}))

//require mongoose
require('./config/mongoose')
// process.on('warning', e => console.warn(e.stack));


//require router
app.use(router)


app.listen(4000)