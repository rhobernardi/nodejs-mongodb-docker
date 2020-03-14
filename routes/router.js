const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/', bodyParser.json());
router.get('/', async (req, res) => {
	return res.status(200).json({ status: 'route /' });
});

module.exports = router;
