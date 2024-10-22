const mongoose = require("mongoose");
const { Schema } = require ('mongoose');

const teamSchema = new Schema(
    {
        teamName: { type: String, required: true },
        teamInitials: { type: String, required: true },
        ballpark: { type: String, required: true },
        city: { type: String, required: true },
    },
    { timestamps: true }
)

const Team = mongoose.model("Team", teamSchema)

module.exports = Team;