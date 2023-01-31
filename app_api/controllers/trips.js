const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async(req, res) => {
    model
        .find({}) // empty filter for all - call find with no parameters - finds all trips
        .exec((err, trips) => {
            if (!trips){
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

module.exports = {
    tripsList
};