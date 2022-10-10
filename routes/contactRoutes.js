const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const Contact = require("../models/contactModel.js");
const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post('/contact', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/contact?info=' + info);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

       
      if (req.user.role === "manager"){
        return res.redirect('/managerDash');
        } else if(req.user.role === "ceo"){
          return res.redirect('/ceoDash')
        }else{
          return res.redirect('/regularDash')
        }
    });

  })(req, res, next);
});


module.exports = router