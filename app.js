const express = require("express");
const app = express();

const companyRouter = require("./routes/company.router")
const teamRouter = require("./routes/team.router")

require('./utils/db')

app.use(express.json());

app.use("/", companyRouter)
app.use("/teams", teamRouter)

app.listen(3000, () => console.log("server has started"))
