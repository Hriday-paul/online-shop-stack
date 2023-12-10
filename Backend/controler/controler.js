const productModel = require("../model/productModel");
const demoModel = require("../model/demoModel");
const userCart = require("../model/userCart");
const users = require("../model/users")
const { v4: uuidv4 } = require('uuid');
const path = require("path");

const getData = async (req, res) => {
    try {
        const page_num = parseInt(req.params.pageNum);
        const limit = req.query.limit;
        const datas = await productModel.find({}).select("-image").sort({ createdAt: -1 }).skip((page_num - 1) * limit).limit(limit)
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

const getAllDataLength = async (req, res) => {
    try {
        const length = await productModel.estimatedDocumentCount();
        res.send({
            status: true,
            message: "All product length get successfully",
            data: length
        })

    } catch (err) {
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

const deleteProduct = async (req, res) => {
    try {
        const query = { id: req.query.id }
        await productModel.deleteOne(query)
        res.send({
            status: true,
            message: "Product delete successfully",
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

const upDateProduct = async (req, res) => {
    try {
        const query = {id : req.query.id};
        let file = false;

        if (req.query.imageTrue) {
            file = req.files.imageFile;
        }

        const updateProductInfo = {
            product_name: req.body.productName,
            product_model: req.body.productModel,
            brand: req.body.brand,
            stock: req.body.stock,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.categoryName,
            createdAt: Date.now(),
        }
        if (file) {
            updateProductInfo.image.data = file.data;
            updateProductInfo.image.contentType = file.mimetype;
        }
        const productInfo = await {
            $set: updateProductInfo
        }
        await productModel.updateOne(query, productInfo)
        res.send({
            status: true,
            message: "Product update successfully",
        })
    } catch (err) {
        res.send({
            status: false,
            message: err.message,
            error: err
        })
    }

}

const getCategoryProduct = async (req, res) => {
    try {
        const categorynm = req.params.categoryName
        const page_num = parseInt(req.params.pageNum);

        const query = { category: categorynm }
        const datas = await productModel.find(query).select("-image").sort({ createdAt: -1 }).skip((page_num - 1) * 9).limit(9)
        res.send({
            status: true,
            message: "All product get successfully",
            datas
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

const getCategoryDataLength = async (req, res) => {
    try {
        const category = req.params.categoryName;
        const query = { category }
        const length = await productModel.find(query).countDocuments();
        res.send({
            status: true,
            message: `${category} product get successfully`,
            data: length
        })
    } catch (err) {
        res.send({
            status: false,
            message: `Get product Something wents wrong`,
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

//get photo
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
const deleteCart = async (req, res) => {
    const id = req.params.id;
    const query = { id }
    await userCart.deleteOne(query)
}


//handle User 

//create new user
const createUser = async (req, res) => {
    try {
        const userInfo = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            profile_pic: " ",
            createdAt: Date.now(),
        }
        const newUser = await users(userInfo)
        await newUser.save();
        res.send({
            status: true,
            message: "creat user Successfully",
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

//get user
const getuser = async (req, res) => {
    try {
        const userQuery = { email: req.query.email }
        const userData = await users.findOne(userQuery)
        res.send({
            status: true,
            message: "user info get successfully",
            userData
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

//updarte user
const updateUser = async (req, res) => {
    try {
        const userQuery = { email: req.query.email }
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
            },
        };
        await users.updateOne(userQuery, updateDoc, options);

        res.send({
            status: true,
            message: "update successfully",
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

//update password 
const updateUserPass = async (req, res) => {
    try {
        const userQuery = { email: req.query.email }
        const updateDoc = {
            $set: {
                password: req.body.password
            },
        };
        await users.updateOne(userQuery, updateDoc);
        res.send({
            status: true,
            message: "password update successfully",
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






module.exports = {
    getData,
    getAllDataLength,
    getSingleProduct,
    deleteProduct,
    upDateProduct,
    getCategoryProduct,
    getCategoryDataLength,
    postData,
    getPhoto,
    addToCart,
    userGetCart,
    deleteCart,
    createUser,
    getuser,
    updateUser,
    updateUserPass
}