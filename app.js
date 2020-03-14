const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8081;
const router = require('./routes/router');

app.use(morgan('dev'));
app.use(router);

app.get('/', (req, res) => {
	return res.status(200).json({ status: 'online' });
});

app.listen(port, () => {
	console.log('Running on port ' + port);
});
