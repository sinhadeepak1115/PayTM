const z = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const express = require("express");
const router = express.Router();

const singupBody = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string()
})

router.post("/signup", async (req, res) => {
  const { success } = singupBody.safeParse(req.body)
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
  const token = jwt.sign(userId, JWT_SECRET);
  res.json({
    message: "User created successfully",
    token: token
  })
})



module.exports = router;
