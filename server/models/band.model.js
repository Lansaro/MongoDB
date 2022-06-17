const mongoose = require("mongoose");

const BandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "A band's name is required"],
            minlength: [2, "The band name must be at least 2 chracters long!"],
        },
    },
    { timestamps: true }
);

const Band = mongoose.model("Band", BandSchema);

module.exports = Band;