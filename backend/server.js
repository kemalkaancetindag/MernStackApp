const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRoute = require("./routes/exercises");
const userRoute = require("./routes/users");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT ;

app.use(cors());

app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB Database Connection Established Succesfully");
});


app.use("/exercises" , exerciseRoute);
app.use("/users" , userRoute);

app.listen(PORT, () => {
  console.log(`Server Is Running On ${PORT}`);
});
