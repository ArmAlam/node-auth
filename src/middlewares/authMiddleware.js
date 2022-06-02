// verify token
function verifyToken(req, res, next) {
	// get header value
	const bearerHeader = req.headers.authorization

	if (typeof bearerHeader !== 'undefined') {
		// separate token
		const bearer = bearerHeader.split(' ');
		req.token = bearer[1];

		next();
	} else {
		// Forbidden
		res.sendStatus(403)
	}
}

module.exports = verifyToken;