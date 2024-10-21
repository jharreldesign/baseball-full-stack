const { Schema } = require ('mongoose');

const ballparkSchema = new Schema(
    {
        ballparkName: { type: String, required: true },
        address: [
            {
                street: { type: String, required: true },
                city: { type: String, required: true },
                state: { type: String, required: true },
                zip: { type: Number, required: true }
            },
        ],
        ballparkOpen: { type: String, required: true },
        capacity: { type: Number, required: true },
        ballparkImg: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = ballparkSchema;