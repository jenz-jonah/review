
const express = require("express")
const workerModel = require("../models/workermodels")


const router = express.Router()

router.get("/worker-list", async (req,res)=> {
  const workerlist = await workerModel.find()
  res.render("workerlist", {
    title: "worker", workers: workerlist
  })
})

router.get("/profile", (req, res)=> {
  res.render("test")
})

//here we are creating aroute. worker form is a path to workerform.pug file
router.get("/worker-form", (req, res)=> {
  res.render("workerForm")
})


router.post("/newWorker", async (req, res)=> {
  try{
      const newWorker = new workerModel(req.body)
      await newWorker.save()
      res.redirect("/worker/worker-form")
      console.log(req.body)
  }
  catch(err) {
    res.status(400).render("workerForm")
  }
})

  router.get("/worker-list", async (req, res)=> {
    try{
      console.log(req.user.firstname)
      let items = await workermodel.find();
      console.log(items)
    res.render("workersList", {worker : workers})
      }
      catch(err){
        console.log(err)
        res.send("could not retrieve workers list")
      }
  })

  router.post("/worker-list", async (req, res)=> {
    try{
      await workermodel.deleteOne({
        _id: req.body.id
      })
      res.redirect("/workers-list")
    }
    catch(err){
      res.status(400).send("unable to delete item from the database")
    }
  })



  

//this should always be the last line in the routes
module.exports = router
