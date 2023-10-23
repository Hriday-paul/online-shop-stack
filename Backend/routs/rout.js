const express = require("express");
const { getData, postData, demoControler, getPhoto, getCategoryProduct, getSingleProduct } = require("../controler/controler");
const router = express.Router();
const path = require("path");
var bodyParser = require('body-parser')
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



router.get("/category", getData);

//get single product
router.get("/product/:id", getSingleProduct)

//upload.single('imageFile'),
router.post("/postData", postData);

//get single photo
router.get("/getImage/:id", getPhoto)

//get category wise product
router.get("/category/:categoryName", getCategoryProduct)





module.exports = router;