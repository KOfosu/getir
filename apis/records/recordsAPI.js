const controller = require('./recordsController');
const router = require('express').Router();

module.exports = (() => {
    router.route('/')
        .post(controller.getRecords)

    return router;
})();