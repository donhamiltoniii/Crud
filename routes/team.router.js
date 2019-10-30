const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const { companyId, team, teamSize } = req.body;
    const teamCompany = await Company.findById(companyId);

    const addedTeam = await new Team(new TeamDom(team, teamSize)).save();

    teamCompany.teams.push(addedTeam);

    await teamCompany.save();
})

router.get("/", async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ err })
    }
})

module.exports = router;
