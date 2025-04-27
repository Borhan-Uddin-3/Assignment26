require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const router = require("./src/routes/api");
const path = require('path')
const app = new express();


// DATABASE CONNECTION
    mongoose.connect("mongodb+srv://borhanuddin01580:7890*@cluster0.kvdjh.mongodb.net/EcomFront")
	.then((res) => {
		console.log("Database Connected");
	})
	.catch((err) => {
		console.log(err);
	});
// Middleware
app.use(cookieParser());
app.use(cors());

app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp()); 


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

app.set("etag", false);

app.use("/api/v1", router)


//Front End connection

app.use(express.static('client/dist'))

app.get('*',function(req,res){
	res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})


module.exports = app;