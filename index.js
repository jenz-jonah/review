const express = require("express")//call express
const path = require("path")
const mongoose = require("mongoose")
const passport = require("passport")



const app = express();

// app.locals.moment = require ("moment")

const Signup = require("./models/signUp")
const landingRoutes = require("./routes/landingRoutes")
const productRoutes = require("./routes/productRoutes")
const signUpRoutes = require("./routes/signUpRoutes")
const workerRoutes = require("./routes/workerRoutes")
const loginRoutes = require("./routes/loginRoutes")
const purchaseRoutes = require("./routes/purchaseRoutes")
const creditRoutes = require("./routes/creditRoutes")
const contactRoutes = require("./routes/contactRoutes")
const saleRoutes = require("./routes/saleRoutes")
const randomRoutes = require("./routes/randomRoutes")




// //creating ssession
const expressSession = require('express-session')({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
});



app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname , 'public')));

app.set("views",path.join(__dirname, "/views"))
app.set("view engine", "pug")



mongoose.connect("mongodb://localhost:27017/kgl",
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Connected to mongoDB");
        else console.log("Error connecting to mongoDB " + err)
    
    })


app.set('view engine', 'pug');
app.set('views', './views');
app.set("views", path.join(__dirname, "/views"))

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public'));



    app.use(expressSession)
    // // configuring passport
    app.use(passport.initialize());
    app.use(passport.session());
    
     //-----------------------------------
    passport.use(Signup.createStrategy());
    passport.serializeUser(Signup.serializeUser());
    passport.deserializeUser(Signup.deserializeUser());



app.use("/", landingRoutes)
app.use("/product", productRoutes)
app.use("/worker", workerRoutes)
app.use("/", signUpRoutes)
app.use("/", loginRoutes)
app.use("/purchase", purchaseRoutes)
app.use("/credit", creditRoutes)
app.use("/contact", contactRoutes)
app.use("/sale", saleRoutes)
app.use("/", randomRoutes)
  



app.get("/signup", (req, res)=>{
    res.render("signUp")
  })

  app.get("/", (req, res)=>{
    res.render("index")
  })
// always the last in the information
app.listen(process.env.PORT || 5000)//should always be the last line of code
 console.log("server running on port" + (process.env.port || 5000))
    