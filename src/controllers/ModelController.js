const mongoose = require('mongoose');

module.exports = {
	// get all objects
	index: async (req, res) => {
		// Set Model as a mongoose model refered by req.params.model
		const Model = mongoose.model(req.params.model);

		const { page = 1 } = req.query;
		const obj = await Model.paginate({}, { page, limit: 10 }).catch(error => {
			return res.status(400).json({ errors: error.errors });
		});
		return res.status(200).json(obj);
	},
	// get a single object
	show: async (req, res) => {
		// Set Model as a mongoose model refered by req.params.model
		const Model = mongoose.model(req.params.model);

		const obj = await Model.findById(req.params.id).catch(error => {
			return res.status(400).json({ errors: error.errors });
		});
		return res.status(200).json(obj);
	},
	// save an object in database
	store: async (req, res) => {
		// Set Model as a mongoose model refered by req.params.model
		const Model = mongoose.model(req.params.model);

		const obj = await Model.create(req.body).catch(error => {
			return res.status(400).json({ errors: error.errors });
		});
		return res.status(201).json(obj);
	},
	// update an object defined by id
	update: async (req, res) => {
		// Set Model as a mongoose model refered by req.params.model
		const Model = mongoose.model(req.params.model);

		const obj = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(error => {
			return res.status(400).json({ errors: error.errors });
		});
		return res.status(200).json(obj);
	},
	// delete a single object defined by id
	destroy: async (req, res) => {
		// Set Model as a mongoose model refered by req.params.model
		const Model = mongoose.model(req.params.model);

		const obj = await Model.findByIdAndRemove(req.params.id).catch(error => {
			return res.status(400).json({ errors: error.errors });
		});
		return res.status(204).send();
	},
};
