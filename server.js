const express = require("express")
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require("./db")
const app = express()
const teamController = require("./controllers/teamController")
const ballparkController = require("./controllers/ballparkController")
const playerController = require("./controllers/playerController")

app.use(express.json());
// app.use(logger("dev"));
// app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a Baseball Root");
});

//index routes
app.get("/teams", teamController.getAllTeams);
app.get("/players", playerController.getAllPlayers);
app.get("/ballpark", ballparkController.getAllBallparks);

// crud routes
app.post("/teams", teamController.createTeam)
app.post("/players", playerController.createPlayer)
app.post("/ballparks", ballparkController.createBallpark)

app.delete("/teams/:id", teamController.deleteTeam)
app.delete("/players/:id", playerController.deletePlayer)
app.delete("/ballparks/:id", ballparkController.deleteBallpark)

app.get("/ballparks/:id", ballparkController.getBallparkByName)
app.get("/players/:id", playerController.getPlayerById)
app.get("/ballparks/:id", playerController.getPlayerById)
app.get("/teams/:id", teamController.getTeamById)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
