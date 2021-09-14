const express = require("express")
const WOD = require("../models/wod")

const router = new express.Router()

router.get("/latestWod", async (req, res) => {
    try {
        const wod = await WOD.find().sort({ $natural: -1 }).limit(1)
        if (!wod) {
            return res.status(404).send()
        }

        res.send(wod[0])
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/wods", (req, res) => {
    const wod = new WOD(req.body)

    wod.save()
        .then(wod => {
            res.status(201).send(wod)
        })
        .catch(error => {
            res.status(400).send(error)
        })
})

router.get("/wods", (req, res) => {
    WOD.find({})
        .then(wods => {
            res.send(wods)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

module.exports = router
