const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const conversationRoute = require("./routes/conversations")
const cors = require('cors');
const messageRoute = require("./routes/messages")
const path = require("path");


dotenv.config();


mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true},
  () => {
    console.log("connect mongo");
  }
)

app.use("/images", express.static(path.join(__dirname, "public/images")));

// middleware
app.use(cors())
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "pictures");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});


app.use("/api/auth", authRoute)
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);


app.listen(8800, () => {
  console.log("connect backend")
});