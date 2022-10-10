const express = require("express")
const purchaseModel = require("../models/purchaseModels")

const router = express.Router()

router.get("/Purchase-list", async (req, res)=> {
  const purchaselist = await purchaseModel.find()
    res.render("Purchaselist", {
        title: "purchase", purchases: purchaselist
    })
})

router.get("/profile", (req, res)=> {
  res.render("test")
})

//here we are creating aroute. worker form is a path to workerform.pug file
router.get("/purchase-form", (req, res)=> {
  res.render("purchaseForm")
})


router.post("/newPurchase", async (req, res) => {
        try {
            const newPurchase = new purchaseModel(req.body)
            await newPurchase.save()
            res.redirect("/Purchase/purchase-Form")
            console.log(req.body)
        }
        catch (err) {
            res.status(400).render("PurchaseForm")
        }
    })

    router.get("/purchase-list", async (req, res)=> {
        try{
          let items = await purchaseModel.find()
        res.render("purchaseList", {purchase : items})
          }
          catch(err){
            console.log(err)
            res.send("could not retrieve purchase list")
          }
      })
    
      router.post("/Purchase-list", async (req, res)=>{
        try{
          await purchasemodel.deleteOne({
            _id: req.body.id
          })
          res.redirect("/purchase-list")
        }
        catch(err){
          res.status(400).send("unable to delete item item from the database")
        }
      })
    
    


module.exports = router