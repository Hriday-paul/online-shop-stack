const express = require("express");
const { getData, postData, demoControler, getPhoto, getCategoryProduct, getSingleProduct, addToCart, userGetCart, deleteCart } = require("../controler/controler");
const router = express.Router();
const path = require("path");
var bodyParser = require('body-parser')
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



router.get("/categoryAll/:pageNum", getData);

//get single product
router.get("/product/:id", getSingleProduct)

//upload.single('imageFile'),
router.post("/postData", postData);

//get single photo
router.get("/getImage/:id", getPhoto)

//get category wise product
router.get("/category/:categoryName/:pageNum", getCategoryProduct)

// add to cart
router.put("/addCart", addToCart)

//get user added cart
router.get("/getCart/:email", userGetCart)

//delete add to cart product
router.delete("/deleteCart/:id", deleteCart)




module.exports = router;