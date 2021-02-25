const controller = require('./recordsController');
const router = require('express').Router();

module.exports = (() => {
    router.route('/records')
        .post(controller.getRecords)

    return router;
})();