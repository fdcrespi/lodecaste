"use strict";

const mongoose = require("mongoose");



require("dotenv").config({path: 'variables.env'});

const connectDB = async () => {
    try {
        /* mongoose.connect("mongodb://localhost/cirilo", { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false 
        }); */
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Connected to DB")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;