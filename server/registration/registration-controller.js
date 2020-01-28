const memberController = (Member) => {
    // Saving registration details after form is filled
    const postMember = (req, res) => {
       let newMember = new Member({
            full_name: req.body.name,
            gender: req.body.gender,
            localLanguages: req.body.languages,
            residence: req.body.location,
            contact: req.body.contact,
            email: req.body.email,
            denomination: req.body.denomination,
            denominationRole: req.body.denominationRole,
            denominationPosition: req.body.denominationPosition,
            denominationOfficer: req.body.denominationOfficer,
            holySpiritBaptiism: req.body.holySpiritBaptiism,
            occupation: req.body.occupation,
            areaOfStudy: req.body.student,
            areaOfWork: req.body.worker,
            joiningDay: req.body.joining,
            outreach: req.body.outreach,
            populate: req.body.populate
        });

        newMember.save((err, savedData) => {
            if (err) {
                return res.send(err);
            }
            return res.status(200).send({successMessage: 'Saved'});
        })
    }

    //Get for when someone refreshes after submitting an entry
    const returnHome = (req, res) => {
        res.redirect('/');
    }

    return {
        postMember, returnHome
    };
}

module.exports = memberController;