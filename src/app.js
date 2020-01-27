const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const debug = require('debug');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

mongoose.connect("mongodb://localhost:27017/registrationDB", {useNewUrlParser: true});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running on port 3000"));