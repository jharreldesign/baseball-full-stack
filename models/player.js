const { Schema } = require('mongoose');

const playerSchema = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        playerNumber: { type: Number, required: true },
        throws: { type: String, required: true },
        hits: { type: String, required: true },
        hometown: { type: String, required: true },
        state: { type: String, required: true },
        currentTeam: { type: String, required: true },
        previousTeam: { type: String, required: true },
        debut: { type: Number, required: true }
    }
)