const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true
    },
    teamSize: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Team', teamSchema)
