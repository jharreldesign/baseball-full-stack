const mongoose = require('mongoose');
const teamSchema = require('./team');
const playerSchema = require('./player');

const Team = mongoose.model('Team', teamSchema);
const Player = mongoose.model('Player', playerSchema);

module.exports = {
    Team,
    Player,
}