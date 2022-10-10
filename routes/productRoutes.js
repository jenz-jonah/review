const express = require("express")
const productModel = require("../models/productModels")


const router = express.Router()

router.get("/product-list", async (req,res)=> {
  const productlist = await productModel.find()
  res.render("productlist", {
    title: "product", products: productlist
  })
})


//here we are creating aroute. worker form is a path to workerform.pug file
router.get("/profile", (req, res)=> {
  res.render("test")
})

router.get("/product-form", (req, res)=> {
  res.render("productForm")
})


router.post("/newProduct", async (req, res)=> {
  try{
      const newProduct = new productModel(req.body)
      await newProduct.save()
      res.redirect("/product/product-form")
      console.log(req.body)
  }
  catch(err) {
    res.status(400).render("productForm")
  }
})

  router.get("/product-list", async (req, res)=> {
    try{
      console.log(req.user.firstname)
      let items = await productModel.find();
      console.log(items)
    res.render("productList", {product : products})
      }
      catch(err){
        console.log(err)
        res.send("could not retrieve product list")
      }
  })

  router.post("/Product-list", async (req, res)=> {
    try{
      await productmodel.deleteOne({
        _id: req.body.id
      })
      res.redirect("/products-list")
    }
    catch(err){
      res.status(400).send("unable to delete item from the database")
    }
  })



//this should always be the last line in the routes
module.exports = router
