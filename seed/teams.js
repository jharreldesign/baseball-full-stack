const db = require('../db');
const { Team, Ballpark } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    // const cubs = await Ballpark.find({ ballparkName: "Wrigley Field"})
    // const cardinals = await Ballpark.find({ ballparkName: "Busch Stadium"})
    // const yankees = await Ballpark.find({ ballparkName: "Yankee Stadium"})
    // const orioles = await Ballpark.find({ ballparkName: "Oriole Park at Camden Yards"})
    // const mariners = await Ballpark.find({ ballparkName: "T-Mobile Park"})
    // const padres = await Ballpark.find({ ballparkName: "Petco Park"})

    const teams = [
        {
            teamName: "Cubs",
            teamInitials: "CHC",
            ballpark: "Wrigley Field",
            city: "Chicago",
        },
       
    ]

    await Team.insertMany(teams);
    console.log('Created teams!')
}

const run = async () => {
    await main()
    db.close()
}

run();