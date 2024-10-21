const { Player } = require('../models')

const getAllPlayers = async (req, res) => {
  try {
    let player = await Player.find({})
    res.json(player)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlayerById = async (req, res) => {
  try {
    let { id } = req.params
    let player = await Player.findById(id)
    if (player) {
      return res.json(player)
    }
    return res.status(400).send('player with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That player does not exist!')
    }
    return res.status(500).send(error.message)
  }
}

const createPlayer = async (req, res) => {
  try {
    let player = await new Player(req.body)
    await player.save()
    return res.status(201).json({
      player
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updatePlayer = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await Player.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('Player not Found, sorry.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlayer = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Player.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Player deleted')
    }
    throw new Error('Player not Found, sorry')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer
}
