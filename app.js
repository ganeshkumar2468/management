const express = require("express")
const hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var mysql = require('mysql');
require('dotenv').config()
require("./config/config")
const router = require("./server/routes/user")
const app = express()

const port = process.env.PORT || 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



//handlebar setup

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use("/",router)

app.get("",(req,res)=>{
    res.render("home")
    
})
app.listen(5000,()=>console.log(`server is listening on port ${port}`));