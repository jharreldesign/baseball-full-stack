const { Schema } = require ('mongoose');

const teamSchema = new Schema(
    {
        teamName: { type: String, required: true },
        teamInitials: { type: String, required: true },
        ballpark: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = teamSchema;