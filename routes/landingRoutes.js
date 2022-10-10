
const express = require("express")
// const workerModel = require("../models/workermodels")
// const connectEnsureLogin = require("connect-ensure-login");

const router = express.Router()

router.get("/",async (req, res)=> {
  res.render("LandingPage/index", {
    title: "Welcome",
  })
})

// router.get("/profile", (req, res)=> {
//   res.render("test")
// })

// router.get("/worker-form", (req, res)=> {
//   res.render("workerForm")
// })


module.exports = router
