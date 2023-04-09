//jshint esversion:6
const express=require("express");
require("dotenv").config()
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
// const mongoose = require("mongoose");
const router = require("./routes/multerRoute");
// mongoose.set("strictQuery", true);
const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URI);
// mongoose.set("strictQuery", true);
// mongoose.connect("mongodb+srv://root:root@cluster0.fgsq0ad.mongodb.net/?retryWrites=true&w=majority", {

//   useNewUrlParser: "true",
//   useUnifiedTopology: "true"

// })
// mongoose.connection.on("error", err => {

//   console.log("err", err)

// })
// mongoose.connection.on("connected", (err, res) => {

//   console.log("mongoose is connected")

// })
// mongoose.connect(process.env.DATABASE_KEY, { useNewUrlParser: true }).then(()=>{  console.log("Successfully connected to mongodb database")})

const url = process.env.MONGO_URL
mongoose.connect("mongodb+srv://root:root@cluster0.fgsq0ad.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on("error", err => {

  console.log("err", err)

})
mongoose.connection.on("connected", (err, res) => {

  console.log("mongoose is connected")

})
// mongoose.set('useFindAndModify', false);
app.set('trust proxy', 1);
app.use(cors());
app.use("/api",router);
const port = 3000 || process.env.PORT;
app.listen(3000, () => {
    console.log(`Sever running at ${port}`);
  });