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