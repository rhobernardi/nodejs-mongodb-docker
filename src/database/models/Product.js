const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// A schema for Product to create a model. A plugin for pagination was added.
const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		default: new Date(),
	},
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model('product', ProductSchema);

console.log('[+] Product model loaded.');
