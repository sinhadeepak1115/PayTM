const express = require("express");
const rootRouter = require("./routes/index.js");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const port = process.env.PORT || 5000;


app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log(`App Listening on port ${port}`)
})
