const express = require('express');
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();


router.post('/login', (req, res) => {
	// fake user
	const user = {
		id: 1, username: 'arman', email: 'arm@mail.com'
	}
	jwt.sign({user}, 'secret', {expiresIn: '1h'}, (err, token) => {
		res.json({
			token,
		});
	})
});

router.post('/post', verifyToken, (req, res) => {
	jwt.verify(req.token, 'secret', (err, authData) => {
		if (err) {
			res.sendStatus(403)
		} else {
			res.json({
				message: 'Post added', authData
			})
		}
	});

});

module.exports = router;