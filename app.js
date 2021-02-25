// getting needed dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nocache = require('nocache');
const compression = require('compression');
const path = require('path');
const recordsAPI = require('./apis/records/recordsAPI');

// initializing the express application
const app = express();

// making a connection to the database
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', () => {
    console.log('error connecting to database');
});

db.once('open', () => {
    console.log('Database has been opened');
});

// setting up middlewares to use for the app
app.set('etag', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(nocache());
app.use(compression());
app.use(express.static(path.join(__dirname)));

app.use('/v1/records', recordsAPI);

// listening on the port the application is being run on
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
