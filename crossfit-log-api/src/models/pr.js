const mongoose = require("mongoose")
const validator = require("validator")

const PR = mongoose.model("PR", {
    date: {
        type: String,
        required: true,
        trim: true,
    },
    result: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = PR
