const db = require('../db');
const { Player, Team } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const cubs = await Team.find({ teamName: "Cubs"})
    const cardinals = await Team.find({ teamName: "Cardinals"})
    const mariners = await Team.find({ teamName: "Mariners"})
    const padres = await Team.find({ teamName: "Padres"})
    const yankees = await Team.find({ teamName: "Yankees"})
    const orioles = await Team.find({ teamName: "Orioles"})


    const players = [
        {
            first_name: "Cody",
            last_name: "Bellinger",
            playerNumber: 24,
            position: "Center Field",
            throws: "Left",
            hits: "Left",
            hometown: "Scottsdale",
            headshot: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/641355/headshot/67/current",
            currentTeam: cubs._id,
            previousTeam: cardinals._id,
            debut: 2017
        },
        // {
        //     first_name: "Nolan",
        //     last_name: "Arenado",
        //     playerNumber: 28,
        //     position: "Shortstop",
        //     throws: "Right",
        //     hits: "Right",
        //     hometown: [
        //         {
        //             city: "Newport Beach",
        //             state: "California"
        //         }
        //     ],
        //     headshot: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/571448/headshot/67/current",
        //     currentTeam: cardinals[0]._id,
        //     previousTeam: yankees[0]._id,
        //     debut: 2013
        // },
        // {
        //     first_name: "Cal",
        //     last_name: "Raleigh",
        //     playerNumber: 24,
        //     position: "Catcher",
        //     throws: "Right",
        //     hits: "Switch",
        //     hometown: [
        //         {
        //             city: "Cullowhee",
        //             state: "North Carolina"
        //         }
        //     ],
        //     headshot: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/663728/headshot/67/current",
        //     currentTeam: mariners[0]._id,
        //     previousTeam: padres[0]._id,
        //     debut: 2021
        // },
        // {
        //     first_name: "Juan",
        //     last_name: "Soto",
        //     playerNumber: 22,
        //     position: "Right Field",
        //     throws: "Left",
        //     hits: "Left",
        //     hometown: [
        //         {
        //             city: "Santo Domingo",
        //             state: "Dominican"
        //         }
        //     ],
        //     headshot: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/665742/headshot/67/current",
        //     currentTeam: yankees[0]._id,
        //     previousTeam: orioles[0]._id,
        //     debut: 2018
        // },
        // {
        //     first_name: "Fernando",
        //     last_name: "Tatis Jr.",
        //     playerNumber: 23,
        //     position: "Right Field",
        //     throws: "Right",
        //     hits: "Right",
        //     hometown: [
        //         {
        //             city: "San Pedro De Macoris",
        //             state: "Dominican Republic"
        //         }
        //     ],
        //     headshot: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/665487/headshot/67/current",
        //     currentTeam: padres[0]._id,
        //     previousTeam: orioles[0]._id,
        //     debut: 2019
        // },
        // {
        //     first_name: "Adley",
        //     last_name: "Ruschman",
        //     playerNumber: 35,
        //     position: "Catcher",
        //     throws: "Right",
        //     hits: "Switch",
        //     hometown: [
        //         {
        //             city: "Portland",
        //             state: "Oregon"
        //         }
        //     ],
        //     headshot: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/668939/headshot/67/current",
        //     currentTeam: orioles[0]._id,
        //     previousTeam: yankees[0]._id,
        //     debut: 2022
        // },

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