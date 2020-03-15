const mongoose = require('mongoose');

const db_port = process.env.DEB_PORT || 27017;

// Connection to database running on port 27017 in Docker machine
mongoose
	.connect(`mongodb://localhost:${db_port}/nodeapi`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`[*] Database connected on port ${db_port}.`);
	})
	.catch(error => {
		throw new Error(error);
	});
