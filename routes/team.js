const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
const Team = require("../models/Teams");
const TeamDom = require("../models/teamDom");

router.post("/", async(req, res)=>{
    console.log(req.body)
    const companyId = req.body.companyId;
    let team = req.body.team;
    let teamSize = req.body.teamSize;
    const teamAdded =  new Team(new TeamDom(team, teamSize))
    const id  = await Company.findById(companyId);
    id.team.push(teamAdded);
    await id.save();
    console.log(id);

    const result = await teamAdded.save();
    console.log(result);    
})

router.get("/", async(req, res)=>{
    try{
        const teams= await Team.find();
        res.json(teams);
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router;