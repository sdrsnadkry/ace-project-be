import express from "express";
import mongoose from "mongoose";

const app = express();

const port = 8001;

app.get("/", (req, res) => {
  return res.send("Hello from project backend");
});

app.get("/api/products", (req, res) => {
  res.send([
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
    },
  ]);
});

app.listen(port, () => {
  console.log("App is running on port " + port);
});

// u4G4118olfrHP2GJ
// dbuser

mongoose.connect("mongodb://localhost/amazona");
