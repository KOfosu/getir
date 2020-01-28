const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    full_name: String,
    gender: String,
    localLanguages: String,
    residence: String,
    contact: Number,
    email: String,
    denomination: String,
    denominationRole: String,
    denominationPosition: String,
    denominationOfficer: String,
    holySpiritBaptiism: String,
    occupation: String,
    areaOfStudy: String,
    areaOfWork: String,
    joiningDay: String,
    outreach: String,
    populate: String
});

module.exports = mongoose.model('Member', MemberSchema);