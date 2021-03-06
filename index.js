const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err) {
		console.log('Could not connect to database:', err);
	}
	else {
		console.log('Connected to database:' + config.db);
	}
});
app.use(express.static(__dirname + '/dist/'));

app.get('*',(req, res) =>{
	res.send(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, () => {
	console.log("LIstening on port 8080");
})