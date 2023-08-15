require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const userRouter = require("./routers/userRoute");
const planetRouter = require("./routers/planetRoute");
const tripRouter= require("./routers/tripRoute");
// express app
app.use(cors());
// middleware
app.use(express.json());

mongoose.set("strictQuery", true);


app.use("/api/user", userRouter);
app.use("/api/planet", planetRouter);
app.use("/api/trip", tripRouter);



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
