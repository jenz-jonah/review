const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
// const connectEnsureLogin = require("connect-ensure-login")

const Signup = require("../models/signUp.js");
const router = express.Router();

router.get("/login",  (req, res) => {
  res.render("login");
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?info=' + info);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

       
      if (req.user.role === "manager") {
        return res.redirect('/managerDash');
        }
      if(req.user.role === "ceo") {
          return res.redirect('/ceoDash');
        }
      if(req.user === "/regular") {
          return res.redirect('/regularDash');
        }
    })

  })(req, res, next);
  });


module.exports = router