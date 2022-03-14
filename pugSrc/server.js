const express = require('express')
const fs = require('fs')
const handlebars = require("express-handlebars")

const app = express()
app.use(express.json)
app.use(express.static("public"))
app.set("views", "./views")
app.set("view engine", "pug")


const PORT = 8080
const db = fs.readFileSync('productos.json')

const server = app.listen(PORT, () => {

} )

app.get("/productos", (req, res)=> {
    res.render("products", {db})
})

app.get("/", (req, res)=> {
    res.render("form", {})
})

app.post("/productos", (req, res)=> {
    const { body } = req
    db.push(body)
    res.render("form", {})

    res.send(db)
})