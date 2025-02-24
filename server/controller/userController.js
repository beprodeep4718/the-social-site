const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ msg: "Username and password are required" });
      }

      const user = await User.findOne({ username });
      if (user) return res.status(400).json({ msg: "Username already taken" });

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({ username, password: hashedPassword });

      res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ msg: "Duplicate username" });
      }
      res.status(500).json({ msg: "Internal server error" });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ msg: "User does not exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ msg: "Logged in successfully", token });
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  },
  logout: async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ msg: "Logged out successfully" });
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select({ password: 0 }).populate("posts");
      if (!user) return res.status(400).json({ msg: "User does not exist" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  },
};

module.exports = userCtrl;
