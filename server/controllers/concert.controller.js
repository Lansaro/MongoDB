const Band = require("../models/band.model");
const Concert = require("../models/concert.model");
// /api/concert/<band_id>
const createNewConcert = (req, res) => {
  // 1.
    console.log(req.body);
    req.body.band_id = req.params.band_id;
    console.log(req.body);
    Concert.create(req.body)
        .then((newConcert) => {
            console.log(newConcert);
            res.json(newConcert);
        })
        .catch((err) => console.log(err));
};

module.exports = {
    createNewConcert,
};