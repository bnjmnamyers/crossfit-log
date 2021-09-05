const mongoose = require("mongoose")
const validator = require("validator")

const WOD = mongoose.model("WOD", {
    coachedBy: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    howIFelt: {
        type: String,
        trim: true,
        required: false,
    },
    isHeroWOD: {
        type: Boolean,
        default: false,
    },
    movementList: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        trim: true,
    },
    results: {
        type: String,
        required: true,
        trim: true,
    },
    text: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
})

module.exports = WOD
