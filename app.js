const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDB'

//to use the express frame work
const app = express()

// to connet to a database
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected....')

})

//use the express json format
app.use(express.json())

//conect to this routes 
const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)


app.listen(9000, () => {
    console.log('server started on port 9000')
})