const joi = require('joi');
const utils = require('../../utils/utils');

module.exports = (() => {
    return {
        validate: (req) => {
            let errorMessages = [];

            // schema to be used in performing validation
            const validationSchema = joi.object({
                startDate: joi.date().required().label('Start date'),
                endDate: joi.date().required().label('End date'),
                minCount: joi.number().positive().required().allow(0).label('Minimum count'),
                maxCount: joi.number().positive().required().allow(0).label('Maximum count'),
            });

            errorMessages = utils.pushJoiValidationErrorsToErrorMessagesArray(validationSchema, req.body, errorMessages);

            return errorMessages;
        },
    }
})();