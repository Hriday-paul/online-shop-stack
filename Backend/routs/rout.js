const express = require("express");
const { getData, postData, demoControler, getPhoto, getCategoryProduct, getSingleProduct, addToCart, userGetCart, deleteCart, createUser, getuser, updateUser, updateUserPass, getAllDataLength, getCategoryDataLength, deleteProduct, upDateProduct } = require("../controler/controler");
const router = express.Router();
const path = require("path");
var bodyParser = require('body-parser');
const { getallUsers, usersLength, deleteUser } = require("../controler/Admin");
const { uploadOrder, getUserOrder } = require("../controler/Order");
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



router.get("/categoryAll/:pageNum", getData);

//get all datas length 
router.get("/allDataLength", getAllDataLength);

//get single product
router.get("/product/:id", getSingleProduct);

//delete product
router.delete("/deleteProduct", deleteProduct)

//update product
router.put("/updateProduct", upDateProduct)

//upload.single('imageFile'),
router.post("/postData", postData);

//get single photo
router.get("/getImage/:id", getPhoto)

//get category wise product
router.get("/category/:categoryName/:pageNum", getCategoryProduct)

//category product length
router.get("/categoryDataLength/:categoryName", getCategoryDataLength)
// add to cart
router.put("/addCart", addToCart)

//get user added cart
router.get("/getCart/:email", userGetCart)

//delete add to cart product
router.delete("/deleteCart/:id", deleteCart)



//handle user

//create user
router.post("/createUser", createUser)

//get user
router.get("/getuser", getuser)

//update user info 
router.put("/updateUser", updateUser)

//update user password
router.put("/updatePassword", updateUserPass)


//handle admin

//get all users
router.get("/allUsers", getallUsers)

//get users length
router.get("/usersLength", usersLength)

//delete user
router.delete("/deleteUser", deleteUser);


//handle product order

router.put("/addOrder", uploadOrder);

//get order by user
router.get("/getOrder", getUserOrder)





module.exports = router;