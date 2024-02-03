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

})

module.exports = router;
