const express = require("express")
const creditModel = require("../models/creditModel")

const router = express.Router()

router.get("/credit-list", async (req, res)=> {
    const creditlist = await creditModel.find()
    res.render("creditlist", {
        title: "credit", credits: creditlist
    })
})

router.get("/profile", (req, res)=> {
    res.render("test")
})

router.get("/credit-form", (req, res)=> {
    res.render("creditForm")
})


router.post("/newCredit", async (req, res)=> {
    try{
        const newCredit = new creditModel(req.body)
        // console.log(req.body)
        await newCredit.save()
        res.redirect("/credit/credit-form")
        console.log(req.body)
   }
   catch(err) {
    res.status(400).render("creditForm")
  }
})

  router.get("/credit-list", async (req, res)=> {
    try{
      console.log(req.user.firstname)
      let items = await creditmodel.find();
      console.log(items)
    res.render("creditList", {credits : items})
      }
      catch(err){
        console.log(err)
        res.send("could not retrieve credit list")
      }
  })

  router.post("/credit-list", async (req, res)=> {
    try{
      await creditmodel.deleteOne({
        _id: req.body.id
      })
      res.redirect("/credit-list")
    }
    catch(err){
      res.status(400).send("unable to delete item item from the database")
    }
  })


module.exports = router