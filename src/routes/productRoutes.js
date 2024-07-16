import { Router } from "express";
import {
	createProduct,
	getAllProducts,
	getProductById,
	removeProductById,
	updateProductById,
} from "../controllers/product.js";
import { productSchema } from "../validSchema/productSchema.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";

const productRouter = Router();

productRouter.get("/:id", getProductById);
productRouter.get("/", getAllProducts);

// admin mới đk làm!
productRouter.post("/", validBodyRequest(productSchema), createProduct);
productRouter.patch("/:id", validBodyRequest(productSchema), updateProductById);
productRouter.delete("/:id", removeProductById);

export default productRouter;
