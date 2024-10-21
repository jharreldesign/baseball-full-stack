const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const teamController = require('./controllers/teamController');
const playerController = require('./controllers/playerController');
const ballparkController = require('./controllers/ballparkController');
const userController = require('./controllers/userController');
const scheduleController = require('./controllers/scheduleController');
const { User } = require('./models');
const { Team } = require('./models');
const { Player } = require('./models');
const { Schedule } = require('./models')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('This is a Baseball Root')
})

app.get('/teams', teamController.getAllTeams);
app.get('/players', playerController.getAllPlayers);
app.get('/ballpark', ballparkController.getAllBallparks);
app.get('/user', userController.getAllUsers);
app.get('/sschedules', scheduleController.getAllSchedules);

//CREATE USER
app.post ('/users', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password
    });

    const savedUser = await newUser.save();

    res.send(savedUser);
  } catch (error) {
    res.status(500).send('Error saving user: ' + error.message);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send('Error fetching users: ' + error.message);
  }
})

//CREATE TEAM
app.post ('/teams', async (req, res) => {
  const { teamName, teamInitials, ballpark } = req.body;

  try {
    const newTeam = new Team({
      teamName,
      teamInitials,
      ballpark
    });

    const savedTeam = await newTeam.save();

    res.send(savedTeam);
  } catch (error) {
    res.status(500).send('Error saving team: ' + error.message);
  }
});

app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find();
    res.send(teams);
  } catch (error) {
    res.status(500).send('Error fetching teams: ' + error.message);
  }
})

//CREATE PLAYER
app.post ('/players', async (req, res) => {
  const { first_name, last_name, playerNumber, position, throws, hits, hometown, headshot, debut } = req.body;

  try {
    const newPlayer = new Player({
      first_name,
      last_name,
      playerNumber,
      position,
      throws,
      hits,
      hometown,
      headshot,
      debut
    });

    const savedPlayer = await newPlayer.save();

    res.send(savedPlayer);
  } catch (error) {
    res.status(500).send('Error saving team: ' + error.message);
  }
});

app.get('/players', async (req, res) => {
  try {
    const players = await Player.find();
    res.send(players);
  } catch (error) {
    res.status(500).send('Error fetching players: ' + error.message);
  }
})

//CREATE SCHEDULE
app.post ('/schedules', async (req, res) => {
  const { gameDate, homeTeam, awayTeam, ballpark } = req.body;

  try {
    const newSchedule = new Schedule({
      gameDate, homeTeam, awayTeam, ballpark
    });

    const savedSchedule = await newSchedule.save();

    res.send(savedSchedule);
  } catch (error) {
    res.status(500).send('Error saving game date: ' + error.message);
  }
});

app.get('/schedules', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.send(schedules);
  } catch (error) {
    res.status(500).send('Error fetching scheduled game date: ' + error.message);
  }
})

app.get('/*', (req, res) => {
    res.send('Sorry, this path does not exist');
})

app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`);
})