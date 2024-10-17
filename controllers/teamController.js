
const { Team } = require('../models')

const getAllTeams = async (req, res) => {
  try {
    let team = await Team.find({})
    res.json(team)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTeamById = async (req, res) => {
  try {
    let { id } = req.params
    let team = await Team.findById(id)
    if (team) {
      return res.json(team)
    }
    return res.status(400).send('team with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That team does not exist!')
    }
    return res.status(500).send(error.message)
  }
}

const createTeam = async (req, res) => {
  try {
    let team = await new Team(req.body)
    await team.save()
    return res.status(201).json({
      team
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateTeam = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await Team.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('Team not Found, sorry.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteTeam = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Course.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Team deleted')
    }
    throw new Error('Team not Found, sorry')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam
}
