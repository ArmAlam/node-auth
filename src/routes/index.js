const express = require('express');

const router= express.Router();
const authRoute = require('../routes/authRoute');

const routes = [
	{
		path: '/auth',
		route: authRoute
	}
];

routes.forEach(route => {
	router.use(route.path, route.route)
});

module.exports = router;



