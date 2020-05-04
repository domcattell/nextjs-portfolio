const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	title: String,
	titleSearch: {
		type: String,
		lowercase: true
	},
	url: {
		type: String,
		lowercase: true
	},
	description: String,
	code: String,
	demo: String,
	created: {
		type: Date,
		default: Date.now
	},
	projectImg: {
		type: String,
		default: 'none'
	}
});

module.exports = mongoose.model('project', projectSchema);
