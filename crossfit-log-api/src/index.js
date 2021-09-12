const express = require("express")
require("./db/mongoose")

const WOD = require("./models/wod")
const PR = require("./models/pr")

const app = express()
const port = process.env.PORT || 2418
var cors = require("cors")
app.use(cors())

app.post("/wods", (req, res) => {
    const wod = new WOD(req.body)

    wod.save()
        .then(wod => {
            res.status(201).send(wod)
        })
        .catch(error => {
            res.status(400).send(error)
        })
})

app.get("/wods", (req, res) => {
    WOD.find({})
        .then(wods => {
            res.send(wods)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

app.post("/prs", (req, res) => {
    const pr = new PR(req.body)

    pr.save()
        .then(pr => {
            res.status(201).send(pr)
        })
        .catch(error => {
            res.status(400).send(error)
        })
})

app.get("/prs", (req, res) => {
    PR.find({})
        .then(prs => {
            console.log(prs)
            res.send(prs)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})
