require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose Connected Successfully")
});
connection.on("error", () => {
    console.log("Mongoose default connection error: " + err);
})


app.post("/")


app.listen(PORT, function () {

    console.log(`App is running on http://localhost:${PORT}`);
});