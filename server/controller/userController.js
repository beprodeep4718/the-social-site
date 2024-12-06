const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.findOne({ username });
      if (user) return res.status(400).json({ msg: "User already exists" });

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await User.create({ username, email, password: hashedPassword });

      res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
      console.log(error.message);
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ msg: "User does not exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ msg: "Logged in successfully" });
    } catch (error) {
      console.log(error.message);
    }
  },
  logout: async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ msg: "Logged out successfully" });
  },
  getUser: async (req, res) => {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  },
};

module.exports = userCtrl;