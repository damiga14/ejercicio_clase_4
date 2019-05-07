/*

q se conecte a base

q tenga un .env

q tenga crud, los 4 endpoints

*/


var express = require('express')

var app = express()

var rutasAPI = require('./routes/api.js')


app.use('/api', rutasAPI);


app.listen(7924, function()
{
    console.log("Server on port 7924")
})