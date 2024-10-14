const db = require('../db');
const { Team } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const teams = [
        {
            teamName: "Dodgers",
            ballpark: "Dodger's Stadium",
            city: "Los Angeles",
            state: "California",
            yearOpened: 1989,
            capacity: 56000,
            league: "National League",
            division: "West"
        }

    ]

    await Team.insertMany(teams);
    console.log('Created teams!')
}

const run = async () => {
    await main()
    db.close()
}

run();