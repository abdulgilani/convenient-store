import express from "express";
import "dotenv/config";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/product", productRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
