const mongoose = require('mongoose');
const config = require('./config/config');

let db = mongoose.createConnection(config.mongoDBUri,config.mongoDBOptions);
db.then((data) => {
	console.info(`${Date.now()} MongoDB connected at ${config.mongoDBUri}`)
}).catch((err) => {
	console.error(`${Date.now()} MongoDB connection failed due to ${err}`)
});
module.exports = db;
