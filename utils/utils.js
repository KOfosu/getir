
const { joiOptions } = require('../config/config');

module.exports = (() => {
    return {
        pushJoiValidationErrorsToErrorMessagesArray: (joiSchema, objectToValidate, errorMessagesArray) => {
            // validating the object that will be passed
            // the validate method returns an object but since we are only interested in the errors
            // we only retrieve the error array
            const { error } = joiSchema.validate(objectToValidate, joiOptions);

            // checking if array contains data before iterating over to push the errors into the error messages array
            if (error) {
                error.details.forEach((error) => errorMessagesArray.push(error.message));
            }
        }
    }
})();
