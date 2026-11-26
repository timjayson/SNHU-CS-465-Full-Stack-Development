
const mongoose = require('mongoose');

// This connects to the local Travlr database
const host = '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

mongoose.connect(dbURI);

// This is the database connection event handlers
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// This closes the connection when the application stops
const gracefulShutdown = async (msg) => {
    await mongoose.connection.close();
    console.log(`Mongoose disconnected through ${msg}`);
};

// This is the Windows application shutdown
process.on('SIGINT', async () => {
    await gracefulShutdown('app termination');
    process.exit(0);
});

// This loads the trip model
require('./travlr');

module.exports = mongoose;