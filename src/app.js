const express = require("express")
const path = require("path");
const app = express()
const hbs = require("hbs");

require("./db/storage");
const Register = require("./models/users")

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")

const port = process.env.PORT || 3000;

app.use(express.static(static_path))
app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partial_path)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/home",async(req,res)=>{
    try {
        res.send(req.body.pass)
    } catch (error) {
       res.status(400).send("ERROR") 
    }
})

app.get("/signup",(req,res)=>{
    res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
})


app.listen(port,()=>{
    console.log(`Running at port ${port}`)
})

