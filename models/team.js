const { Schema } = require ('mongoose');

const teamSchema = new Schema(
    {
        teamName: { type: String, required: true },
        ballpark: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        yearOpened: { type: Number, required: true },
        capacity: { type: Number, required: true },
        league: { type: String, required: true },
        division: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = teamSchema;