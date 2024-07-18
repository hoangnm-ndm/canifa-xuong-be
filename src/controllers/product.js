import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
	try {
		console.log("createProduct");
		const data = await Product.create(req.body);
		if (data) {
			return res.status(201).json({
				success: true,
				data,
				message: "Tao san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};

export const updateProductById = async (req, res, next) => {
	try {
		const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Update san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};

export const removeProductById = async (req, res, next) => {
	try {
		const data = await Product.findByIdAndDelete(req.params.id);
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Remove san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};

export const getProductById = async (req, res, next) => {
	try {
		const data = await Product.findById(req.params.id);
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Tim san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};

export const getAllProducts = async (req, res, next) => {
	try {
		const data = await Product.find();
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Lay san pham thanh cong!",
			});
		}
	} catch (error) {
		next(error);
	}
};
