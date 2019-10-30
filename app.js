const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect('mongodb+srv://jalil:NewWave13$@mongocluster-5xvta.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log("db connected"))

app.use(express.json());

const companyroute = require("./routes/company")
const teamroute = require("./routes/team")
app.use("/", companyroute)
app.use("/teams", teamroute)

app.listen(3000, ()=> console.log("server has started"))