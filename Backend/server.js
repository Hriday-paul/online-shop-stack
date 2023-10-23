const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/connectDb");
const fileUpload = require("express-fileupload")
// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();
app.use(express.static("public"))
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// app.use(fileUpload({
//   useTempFiles : true,
//   tempFileDir : 'public/'
// }));

app.use(fileUpload());


//routes
//user routes
app.use("/api",require("./routs/rout"));

//static files
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", function (req, res) {
  //res.sendFile(path.join(__dirname, "./client/dist/index.html"));
  res.send({
    status: false,
    message: "Get product Something wents wrong",
    error: "not found"
})
});

//port
const PORT = 8000 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
