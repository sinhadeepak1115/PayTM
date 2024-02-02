const express = require("express");
const dotenv = require('dotenv').config();
const cors = require('cors')

const mainRouter = require("./routes/index")

const app = express();

app.use(cors())

const port = process.env.PORT;
console.log(port)
app.get("/", (req, res) => {
  res.send("Hello World");
})

app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`App Listening on port ${port}`)
})
