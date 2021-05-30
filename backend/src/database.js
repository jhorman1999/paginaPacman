const mongoose = require('mongoose');


const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb+srv://jhorman:jhorman@cluster0.bc5i0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});