const db = require('../db');
const { Player, Team } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const cubs = await Team.find({ teamName: "Cubs"})
    const dodgers = await Team.find({ teamName: "Dodgers"})

    const players = [
        {
            first_name: "Cody",
            last_name: "Bellinger",
            playerNumber: 24,
            throws: "Left",
            hits: "Left",
            hometown: "Scottsdale",
            state: "Arizona",
            currentTeam: cubs[0]._id,
            previousTeam: dodgers[0]._id,
            debut: 2017
        }

    ]

    await Player.insertMany(players);
    console.log('Created player!')
    console.log(players)
}

const run = async () => {
    await main()
    db.close()
}

run();