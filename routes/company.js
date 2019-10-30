const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
// Getting all Companies
router.get("/", async (req,res)=>{
    try{
        const companies= await Company.find()
        res.json(companies);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
// Get one Company
router.get('/:id',getCompany, (req,res)=>{
    res.json(res.company)

    
})
// Create Company
router.post("/", async (req,res)=>{
    const newCompany = new Company({
        name: req.body.name,
        marketSize: req.body.marketSize
    })
    try{
        const nw = await newCompany.save()
        res.status(201).json(nw);

    }catch(err){
        res.status(400).json({message: err.message})
    }

})
// Update Company
router.patch("/:id",getCompany,async  (req,res)=>{
    if(req.body.name != null){
        res.company.name = req.body.name;
    }
    if(req.body.marketSize!= null){
        res.company.marketSize = req.body.marketSize;
    }

    try{
        const updatedCompany = await res.company.save()
        res.json(updatedCompany)

    }catch(err){
        res.status(400).json({message: err.message})
    }
   

})
// Delete Company
router.delete("/:id",getCompany, async (req,res)=>{
    try{
        await res.company.remove();
        res.json({message: "company removed"})
    }catch(err){
        res.status(500).json({message:err.message})
    }

})

async function getCompany(req, res, next){
   let company;
    try{
        company = await Company.findById(req.params.id)
        if(company == null){
            return res.status(400).json({message: "Can't find company"})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }
    res.company = company;
    next();
}


module.exports = router;
