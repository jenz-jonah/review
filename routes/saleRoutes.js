const express = require("express")
const saleModel = require("../models/salemodel")


const router = express.Router()

router.get("/sale-list", async (req,res)=> {
  const salelist = await saleModel.find()
  res.render("salelist", {
    title: "sale", sales: salelist
  })
})

router.get("/profile", (req, res)=> {
  res.render("test")
})

//here we are creating aroute. worker form is a path to workerform.pug file
router.get("/sale-form", (req, res)=> {
  res.render("saleForm")
})


router.post("/newOrder", async (req, res)=> {
  try{
      const newSale = new saleModel(req.body)
      await newSale.save()
      res.redirect("/sale/sale-form")
      console.log(req.body)
  }
  catch(err) {
    res.status(400).render("saleForm")
  }
})

  router.get("/sale-list", async (req, res)=> {
    try{
      console.log(req.user.firstname)
      let items = await salemodel.find();
      console.log(items)
    res.render("saleList", {sales : items})
      }
      catch(err){
        console.log(err)
        res.send("could not retrieve sale list")
      }
  })

  router.post("/sale-list", async (req, res)=> {
    try{
      await salemodel.deleteOne({
        _id: req.body.id
      })
      res.redirect("/sale-list")
    }
    catch(err){
      res.status(400).send("unable to delete item from the database")
    }
  })


//this should always be the last line in the routes
module.exports = router
