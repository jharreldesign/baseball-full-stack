const db = require('../db');
const { Player, Team } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const cubs = await Team.findOne({ teamName: "Cubs" }); // Use findOne instead of find

    const players = [
        {
            firstName: "Cody",
            lastName: "Bellinger",
            playerNumber: 24,
            position: "Center Field",
            throws: "Left",
            hits: "Left",
            hometown: "Scottsdale",
            state: "Arizona",
            headshot: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/641355/headshot/67/current",
            currentTeam: cubs._id, // Now this will work because cubs is a single document
            debut: 2017
        }
    ];

    await Player.insertMany(players);
    console.log('Created player!');
    console.log(players);
}

const run = async () => {
    await main();
    db.close();
}

run();
