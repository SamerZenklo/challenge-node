const mongoose = require('mongoose')

const db = 'mongodb+srv://sam:sam715@cluster0.o7gsb.mongodb.net/test'
mongoose.connect(db,{ useNewUrlParser:true,useUnifiedTopology:true})
.then((res) =>{console.log('connected to db')})
.catch( (err) => {console.log(err)})