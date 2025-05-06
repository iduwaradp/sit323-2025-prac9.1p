const mongoose = require('mongoose');
const Item = require('./Item');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://admin:password@mongo:27017/bookstore?authSource=admin';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    return Item.insertMany([
      { title: "Learn React", price: 29.99, description: "React guide" },
      { title: "Node.js Mastery", price: 34.99, description: "Node backend dev" },
      { title: "Kubernetes 101", price: 39.99, description: "Deploy using K8s" }
    ]);
  })
  .then(() => {
    console.log("✅ Seed data inserted");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  });
