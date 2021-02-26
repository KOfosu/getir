const Record = require('./recordsModel');
const validation = require('./recordsValidation');

module.exports = (() => {
    return {
        getRecords: async (req, res) => {
            try {
                // validating request payload
                const errorMessages = validation.validate(req);
                if (errorMessages.length > 0) {
                    return res.status(400).send({
                        code: 4,
                        msg: "Errors",
                        errors: errorMessages
                    });
                }

                // retrieving data submitted to be used to retrieve the records
                const { startDate, endDate, minCount, maxCount } = req.body;

                // retrieving the records based on the parameters sent
                // defining the pipeline to be used in filtering the records
                const pipeline = [
                    // retrieve documents which has their start date falling between the start and end date submitted
                    {
                        "$match": {
                            "createdAt": {
                                $gt: new Date(startDate),
                                $lt: new Date(endDate),
                            }
                        }
                    },
                    // deconstruct the counts array so that it's elements can be summed up
                    { "$unwind": "$counts" },
                    // sum the deconstructed array elements as totalCount
                    {
                        "$group": {
                            "_id": "$key",
                            "key": { "$first": "$key" },
                            "createdAt": { "$first": "$createdAt" },
                            "totalCount": {
                                "$sum": "$counts"
                            }
                        }
                    },
                    // return only records which have their summed counts between the minCount and maxCount submitted
                    {
                        "$match": {
                            "totalCount": {
                                $gt: Number(minCount),
                                $lt: Number(maxCount),
                            }
                        }
                    }

                ];

                // using the defined pipeline to retrieve matching records
                const retrievedRecords = await Record.aggregate(pipeline);

                // returning as response the retrieved records
                return res.status(200).send({
                    code: 0,
                    msg: "Success",
                    records: retrievedRecords
                });
            } catch (error) {
                return res.status(500).send({
                    code: 5,
                    msg: "Server Error",
                    error: error
                });
            }
        }
    }
})();