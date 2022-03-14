const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.json)
app.use(express.static("public"))
app.set("views", "./views")
app.set("view engine", "ejs")


const PORT = 8080
const db = fs.readFileSync('productos.json')

const server = app.listen(PORT, () => {

} )

app.get("/productos", (req, res)=> {
    res.render("main", {
        db, form: false
    })
})

app.get("/", (req, res)=> {
    res.render("main", {
        db, form: true
    })
})

app.post("/productos", (req, res)=> {
    const { body } = req
    db.push(body)
    res.render("main", {
        db, form: true
    })

    res.send(db)
})