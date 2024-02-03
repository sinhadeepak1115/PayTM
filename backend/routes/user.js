const express = require("express");
const z = require("zod");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config")


const router = express.Router();

const singnupSchema = z.object({
  username: z.string().email(),
  firstName: z.string().toLowerCase(),
  lastName: z.string().toLowerCase(),
  password: z.string().min(5)
})

app.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = singnupSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    })
  }
  const existingUser = await User.findOne({
    username: req.body.username
  })
  if (existingUser) {
    return res.status(411).json({

      message: "Email already taken / Incorrect inputs"

    })
  }
  const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  })
  const userId = user._id;
  const token = jwt.sign({
    userId
  }, JWT_SECRET);
  res.json(
    {
      message: "User created successfully",
      token: token
    }
  )
})

module.exports = router;
