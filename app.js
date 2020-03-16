const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const requireDir = require('require-dir');
requireDir('./src/database/models'); // Load all models from this directory

const app = express();
const port = process.env.PORT || 8081; // Load environment PORT config or set default as 8081

app.use(express.json()); // Accept JSON as req.body
app.use(morgan('dev')); // Route access log
app.use(cors()); // Access control to API from all hosts (in this case)

const router = require('./src/router'); // Load routs from router

app.use('/api', router);

app.get('/', (req, res) => {
	return res.status(200).send('<h1>Server is running</h1>');
});

app.listen(port, () => {
	console.log(`[*] Running API on port ${port}.`);
});
