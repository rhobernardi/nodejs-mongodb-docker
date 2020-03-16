const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// A schema for Animal to create a model. A plugin for pagination was added.
const AnimalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	age: {
		type: String,
		required: true,
	},
	hability: {
		type: String,
		enum: ['fly', 'walk', 'swim'],
		required: true,
	},
	createdAt: {
		type: String,
		default: new Date(),
	},
});

AnimalSchema.plugin(mongoosePaginate);
mongoose.model('animal', AnimalSchema);

console.log('[+] Animal model loaded.');
