const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config()

let db;
if (process.env.NODE_ENV === 'production') {
	console.log(`Connecting in ${process.env.NODE_ENV}`);
	db = process.env.MONGO_URI
}

if (process.env.NODE_ENV === 'development') {
	console.log(`Connecting in ${process.env.NODE_ENV}`);
	db = 'mongodb://localhost:27017/full-stack-app'
}

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
