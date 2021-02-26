// getting needed dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nocache = require('nocache');
const compression = require('compression');
const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const config = require('./config/config')
const swaggerDocs = swaggerJsDoc(config.swaggerOptions);
const recordsAPI = require('./apis/records/recordsAPI');


// initializing the express application
const app = express();

// initializing sentry and attaching it to the global object 
// so it can be called globally
Sentry.init({
    tracesSampleRate: 0.5,
    environment: process.env.NODE_ENV,
    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
    ],
});
global.sentryTracker = Sentry;

// making a connection to the database
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

// setting up middlewares to use for the app
app.set('etag', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(nocache());
app.use(compression());
app.use(express.static(path.join(__dirname)));

// setting routes/endpoints to be used
app.use('/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/v1/records', recordsAPI);
app.use('*', (req, res) => {
    return res.status(400).send('Sorry, the requested URL was not found on the server.');
})

// listening on the port the application is being run on
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
