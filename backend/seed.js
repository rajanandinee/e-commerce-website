const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

const products = [
  { name: "Laptop", price: 70000, description: "High-performance laptop", imageUrl: "https://via.placeholder.com/150" },
  { name: "Headphones", price: 1500, description: "Noise-cancelling headphones", imageUrl: "https://via.placeholder.com/150" },
  { name: "Smartphone", price: 25000, description: "Latest Android phone", imageUrl: "https://via.placeholder.com/150" },
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
