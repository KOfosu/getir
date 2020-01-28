const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const debug = require('debug');
const path = require('path');
const cors = require('cors');
const registrationModel = require('./server/registration/registration-model');
const registrationRoute = require('./server/registration/registration-route')(registrationModel);

const app = express();

app.use(express.static(path.join(__dirname, 'www')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
app.use('/home', registrationRoute);
app.use((req, res, next) => {
    return res.status(404).sendFile( res.redirect('/') );
})
// mongodb+srv://admin-king:test1234@outreachdb-fhliu.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://admin-king:test1234@outreachdb-fhliu.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});
// mongoose.connect("mongodb://localhost:27017/registrationDB", {useNewUrlParser: true});

app.listen(process.env.PORT || 3000, () => debug("Server is running on port 3000"));