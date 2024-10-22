const mongoose = require("mongoose")
const { Schema } = mongoose;

const playerSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        currentTeam: { type: Schema.Types.ObjectId, ref: 'Team' }, // Reference to Team
        playerNumber: { type: Number, required: true },
        position: { type: String, required: true},
        throws: { type: String, required: true },
        hits: { type: String, required: true },
        hometown: { type: String, required: true},
        headshot: { type: String, required: true },
        debut: { type: Number, required: true }, 
    },
    { timestamps: true }
)

const Player = mongoose.model("Player", playerSchema)

module.exports = Player;