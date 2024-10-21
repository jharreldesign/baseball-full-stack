const db = require('../db');
const { Ballpark } = require('../models')

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))


const ballparks = [
    //Central
    {
        ballparkName: "Wrigley Field",
        address: [
            {
                street: "1060 W. Addison St.",
                city: "Chicago",
                state: "IL",
                zip: 60613
            }
        ],
        ballparkOpen: "April 20th, 1916",
        capacity:  41649,
        ballparkImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fv%2F8cc%2F25cfd128-1b87-40a7-99da-bc6a955418cc_315362_SOURCE.jpg&f=1&nofb=1&ipt=4d196cb81a86b4dbc6c64d420266c6695e881f034414e51bcad4a72487d56e7c&ipo=images"
    },
    {
        ballparkName: "Busch Stadium",
        address: [
            {
                street: "700 Clark Street",
                city: "St. Louis",
                state: "MO",
                zip: 63102
            }
        ],
        ballparkOpen: "April 10, 2006",
        capacity:  44383,
        ballparkImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Busch_Stadium_2022.jpg/1280px-Busch_Stadium_2022.jpg"
    },
    //Eastern
    {
        ballparkName: "Yankee Stadium",
        address: [
            {
                street: "333 West Camden Street",
                city: "Baltimore",
                state: "MD",
                zip: 21201
            }
        ],
        ballparkOpen: "April 16, 2009",
        capacity:  48876,
        ballparkImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2801493.jpg&f=1&nofb=1&ipt=8ad0599dbf2afb6b5f81fc27cb9786d8f077b45681b1e8db2b95ef390d6af1cf&ipo=images"
    },
    {
        ballparkName: "Oriole Park at Camden Yards",
        address: [
            {
                street: "1060 W. Addison St.",
                city: "Chicago",
                state: "IL",
                zip: 60613
            }
        ],
        ballparkOpen: "April 20th, 1916",
        capacity:  44970,
        ballparkImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.mlbstatic.com%2Fmlb-images%2Fimage%2Fprivate%2Ft_16x9%2Ft_w2208%2Fmlb%2Fbivu8ka3et1ska3m8rxb.jpg&f=1&nofb=1&ipt=b6e90db6b15f0c2e168d60ffde133d8c79b6e746a833b98489ea6bb15619dddd&ipo=images"
    },
    //West
    {
        ballparkName: "T-Mobile Park",
        address: [
            {
                street: "1250 First Avenue South",
                city: "Seattle",
                state: "WA",
                zip: 98134
            }
        ],
        ballparkOpen: "July 15, 1999",
        capacity:  47929,
        ballparkImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fballparkdigest.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fmobilepark2021-mariners.jpg&f=1&nofb=1&ipt=d50ed11e2b21b82e58270e36b2cb5843776dad5015a2352aec7e071ec78f3bc5&ipo=images"
    },
    {
        ballparkName: "Petco Park",
        address: [
            {
                street: "19 Tony Gwynn Drive",
                city: "San Diego",
                state: "CA",
                zip: 92101
            }
        ],
        ballparkOpen: "April 20th, 1916",
        capacity:  44970,
        ballparkImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ballparksofbaseball.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fpetco17markwhitt.jpg&f=1&nofb=1&ipt=7d34e0cd940439301b261cb7742cfac77403388e9ed38d6c9382c5c5544f851c&ipo=images"
    },
]

const run = async () => {
    try {
        await Ballpark.deleteMany();
        await Ballpark.insertMany(ballparks);
        console.log("Ballpark Created")
    } catch (error) {
        console.error("Error seeding ballpark:", error)
    } finally {
        db.close();
    }
}

run();