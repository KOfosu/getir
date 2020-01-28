const express = require('express');
const registrationController = require('../registration/registration-controller');

const registrationRoutes = (Book) => {
    const router = express.Router();
    const register = registrationController(Book);
    
    router.route('/')
    .get(register.returnHome)
    .post(register.postMember);

    return router;
}

module.exports = registrationRoutes;

