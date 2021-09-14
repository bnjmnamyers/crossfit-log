const express = require("express")
require("./db/mongoose")

const WOD = require("./models/wod")
const PR = require("./models/pr")
const prRouter = require("./routers/pr")
const wodRouter = require("./routers/wod")

const app = express()
const cors = require("cors")
const port = process.env.PORT || 2418

app.use(cors(), express.json(), prRouter, wodRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})
