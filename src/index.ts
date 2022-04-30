import express from "express";
import authRoutes from "./routes/auth.route";
import productRoutes from "./routes/product.route";

const app = express();

app.use(express.json());

app.use(authRoutes);
app.use(productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
