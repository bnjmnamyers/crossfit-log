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
    instructions: {
        type: String,
        trim: true,
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
    reflection: {
        type: String,
        trim: true,
        required: false,
    },
    results: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
})

module.exports = WOD
