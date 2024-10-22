const Team = require("../models/team")

// get all teams
const getAllTeams = async (req, res) => {
  const teams = await Team.find()
  res.json(teams)
}

// get single team by id
const getTeamById = async (req, res) => {
  const team = await Team.findById(req.params.id)
  res.json(team)
}

// get team by name
const getTeamByName = async (req, res) => {
  try {
    const { teamName } = req.params
    const team = await Team.find({ name: teamName })
    if (!team) {
      return res
        .status(404)
        .json({ message: "Team not found! Get the search dogs." })
    }
    res.json(team)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create team
const createTeam = async (req, res) => {
  try {
    const team = await new Team(req.body)
    await team.save()
    return res.status(201).json({
      team,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteTeam = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Team.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Team deleted')
    }
    throw new Error('Team not Found, sorry')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getTeamByName,
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeam
}
