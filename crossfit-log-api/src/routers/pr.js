const express = require("express")
const router = new express.Router()
const PR = require("../models/pr")

router.post("/prs", (req, res) => {
    const pr = new PR(req.body)

    pr.save()
        .then(pr => {
            res.status(201).send(pr)
        })
        .catch(error => {
            res.status(400).send(error)
        })
})

router.get("/prs", (req, res) => {
    PR.find({})
        .then(prs => {
            console.log(prs)
            res.send(prs)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

module.exports = router
