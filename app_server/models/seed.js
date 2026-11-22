
 // This brings in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// This reads seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// This deletes any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// This closes the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});
