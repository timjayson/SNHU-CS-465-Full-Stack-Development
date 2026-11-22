const mongoose = require('mongoose');

// This defines the trip schema
const tripSchema = new mongoose.Schema({
	code: { type: String, required: true, index: true },
	name: { type: String, required: true, index: true },
	length: { type: String, required: true },
	start: { type: Date, required: true },
	resort: { type: String, required: true },
	perPerson: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
    description2: { type: String }
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;
