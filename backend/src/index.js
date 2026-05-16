import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

const PORT = process.env.PORT || 5000;

const app = express();
const __dirname = path.resolve();

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:5173/",
    }),
  );
}

app.use(express.json());
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/files/{/*path}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
