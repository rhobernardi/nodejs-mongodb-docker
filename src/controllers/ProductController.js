const mongoose = require('mongoose');

// Set Product as a mongoose model Product
const Product = mongoose.model('Product');

module.exports = {
	// get all products
	index: async (req, res) => {
		const { page = 1 } = req.query;
		const products = await Product.paginate({}, { page, limit: 10 });
		return res.status(200).json(products);
	},
	// get a single product
	show: async (req, res) => {
		const product = await Product.findById(req.params.id);
		return res.status(200).json(product);
	},
	// save a product in database
	store: async (req, res) => {
		const product = await Product.create(req.body);
		return res.status(201).json(product);
	},
	// update a product defined by id
	update: async (req, res) => {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		return res.status(200).json(product);
	},
	// delete a single product defined by id
	destroy: async (req, res) => {
		const product = await Product.findByIdAndRemove(req.params.id);
		return res.status(200).send();
	},
};
