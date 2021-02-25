const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    key: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        require: true
    },
    counts: {
        type: Array,
        require: true
    },
    value: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Record", RecordSchema);
