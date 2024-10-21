const { Schema } = require('mongoose');

const playerSchema = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        playerNumber: { type: Number, required: true },
        position: { type: String, required: true},
        throws: { type: String, required: true },
        hits: { type: String, required: true },
        hometown: { type: String, required: true},
        headshot: { type: String, required: true },
        debut: { type: Number, required: true }, 
        // currentTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
        // previousTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
    },
    { timestamps: true }
)

module.exports = playerSchema;