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
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/user", require("./routes/userRoute"));
app.use("/profile", require("./routes/profileRoute"));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// clearCollection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(process.env.MONGO_URI);
});
