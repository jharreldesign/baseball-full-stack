const mongoose = require('mongoose');
const Team = require("./team");
const Player = require("./player");
const Ballpark = require("./ballpark")

module.exports = {
    Team,
    Player,
    Ballpark,
}