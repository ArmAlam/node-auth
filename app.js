require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./src/routes/index');

const port = process.env.PORT || 5001;

app.use('/api', routes);


app.get('/test', (req,res) => {
	res.json({
		message: 'simple node js auth api '
	})
});



app.listen(port, '', '', () => {
	console.log(`server running on port ${port}`)
})
