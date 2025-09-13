const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");

const app = express();
app.use(cors()); // allow requests from frontend
app.use(express.json());
app.use(productRoutes);

mongoose.connect("mongodb://mongo:27017/ecommerce") // use mongo container name if using Docker
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(3000, () => console.log("Server running on port 3000"));
