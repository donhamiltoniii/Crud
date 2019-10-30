const mongoose = require("mongoose");
const Team = require("../models/Teams");

const CompanySchema = new mongoose.Schema({
    name:{
        type :String, 
        required: true
    }, 
    marketSize : {
        type: String, 
    }, 
    date: {
        type: Date , 
        default: Date.now
    },
    teams: [ { type: mongoose.Schema.Types.ObjectId,
        ref: 'Team' }]
})

module.exports = mongoose.model('Company', CompanySchema)