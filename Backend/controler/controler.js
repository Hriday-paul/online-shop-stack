const productModel = require("../model/productModel");
const demoModel = require("../model/demoModel");
const userCart = require("../model/userCart");
const { v4: uuidv4 } = require('uuid');
const path = require("path");

const getData = async (req, res) => {
    try {
        const page_num = parseInt(req.params.pageNum);
        const datas = await productModel.find({}).select("-image").sort({ createdAt: -1 }).skip((page_num-1)*9).limit(9)
        res.send({
            status: true,
            message: "All product get successfully",
            datas
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: "Get product Something wents wrong",
            error: err
        })
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const query = { id: req.params.id }
        const data = await productModel.findOne(query).select("-image");
        res.send({
            status: true,
            message: "All product get successfully",
            data
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: "Get product Something wents wrong",
            error: err
        })
    }
}

const getCategoryProduct = async (req, res) => {
    try {
        const categorynm = req.params.categoryName
        const page_num = parseInt(req.params.pageNum);
        console.log(categorynm, page_num)
        const query = { category: categorynm }
        const datas = await productModel.find(query).select("-image").sort({ createdAt: -1 }).skip((page_num-1)*9).limit(9)
        res.send({
            status: true,
            message: "All product get successfully",
            datas
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: "Get product Something wents wrong",
            error: err
        })
    }
}

const postData = async (req, res) => {
    try {
        const file = req.files.imageFile;
        const newProduct = await productModel({
            id: uuidv4(),
            product_name: req.body.productName,
            product_model: req.body.productModel,
            brand: req.body.brand,
            stock: req.body.stock,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.categoryName,
            createdAt: Date.now(),
        })
        if (file) {
            newProduct.image.data = file.data;
            newProduct.image.contentType = file.mimetype;
        }
        await newProduct.save();
        await res.json({
            status: true,
            message: "Added new product successfully",
            data: newProduct
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: "Added new product something wents wrong",
            error: err
        })
    }

}




const getPhoto = async (req, res) => {
    try {
        const product = await productModel.findOne({ id: req.params.id }).select("image");
        if (product && product.image && product.image.data) {
            res.set("Content-Type", product.image.contentType);
            return res.send(product.image.data);
        } else {
            return res.status(404).send("Image not found");
        }
    } catch (err) {
        res.send({
            status: false,
            message: "Get photo an error",
            error: err
        })
    }
};

//add to cart by email
const addToCart = async (req, res) => {
    try {
        const filter = { id: req.body.id };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                id: req.body.id,
                product_model: req.body.productModel,
                stock: req.body.stock,
                price: req.body.price,
                discount: req.body.discount,
                email: req.body.email,
                quantity: req.body.quantity || 1,
            },
        };
        await userCart.updateOne(filter, updateDoc, options);
        res.send({
            status: true,
            message: "Added cart SuccessFully",
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: err.message,
            error: err
        })
    }
}

//get user added cart
const userGetCart = async (req, res) => {
    try {
        const email = req.params.email;
        const query = { email }
        const carts = await userCart.find(query)
        res.send({
            status: true,
            message: "Cart product get successfully",
            carts
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: err.message,
            error: err
        })
    }
}

//delete add to cart product
const deleteCart = async(req, res)=>{
    const id = req.params.id;
    const query = {id}
    await userCart.deleteOne(query)
}


module.exports = {
    getData,
    getSingleProduct,
    getCategoryProduct,
    postData,
    getPhoto,
    addToCart,
    userGetCart,
    deleteCart,
}