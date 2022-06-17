const mongoose = require("mongoose");

const ConcertSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    band_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Band",
    },
});

module.exports = mongoose.model("Concert", ConcertSchema);