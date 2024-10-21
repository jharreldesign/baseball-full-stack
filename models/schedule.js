const { Schema } = require ('mongoose');

const scheduleSchema = new Schema(
    {
        gameDate: { type: Date, required: true },
        homeTeam: { type: String, required: true },
        awayTeam: { type: String, required: true },
        ballpark: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = scheduleSchema;