const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')

const teamController = require('./controllers/teamController');

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

app.get('/*', (req, res) => {
    res.send('Sorry, this path does not exist');
})

app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`);
})