const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
    full_name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    localLanguages: {
        type: String,
        require: true
    },
    otherLanguages: String,
    residence: {
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true,
        minlength: 10,
        maxlength: 10
    },
    email: String,
    denomination: {
        type: String,
        require: true
    },
    denominationRole: {
        type: String,
        require: true
    },
    denominationPosition: String,
    denominationOfficer: String,
    holySpiritBaptiism: String,
    occupation: {
        type: String,
        require: true
    },
    areaOfStudy: String,
    areaOfWork: String,
    joiningDay: String,
    outreach: {
        type: String,
        require: true
    },
    populate: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Member", MemberSchema);
