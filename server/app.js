require("dotenv").config();
const express = require("express");
const app = express();
const clearCollection = require("./devutils/clearCollection");

const cookieParser = require("cookie-parser");
const connectDB = require("./utils/db");
const cors = require("cors");

//^ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const allowedOrigins = ['http://172.16.104.10:5173', 'http://localhost:5173']; // Add all allowed origins
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


app.use("/user", require("./routes/userRoute"));
app.use("/profile", require("./routes/profileRoute"));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// clearCollection();

const PORT = process.env.PORT || 3000;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(process.env.MONGO_URI);
});
