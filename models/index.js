const mongoose = require('mongoose');
const teamSchema = require('./team');
const playerSchema = require('./player');
const ballparkSchema = require('./ballpark');
const userSchema = require('./user');
const scheduleSchema = require('./schedule')

const Team = mongoose.model('Team', teamSchema);
const Player = mongoose.model('Player', playerSchema);
const Ballpark = mongoose.model('Ballpark', ballparkSchema);
const User = mongoose.model('User', userSchema);
const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = {
    Team,
    Player,
    Ballpark,
    User,
    Schedule
}