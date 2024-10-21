
const { Ballpark } = require('../models')

const getAllBallparks = async (req, res) => {
  try {
    let ballpark = await Ballpark.find({})
    res.json(ballpark)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBallparkById = async (req, res) => {
  try {
    let { id } = req.params
    let ballpark = await Ballpark.findById(id)
    if (ballpark) {
      return res.json(ballpark)
    }
    return res.status(400).send('Ballpark with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That ballpark does not exist!')
    }
    return res.status(500).send(error.message)
  }
}

const createBallpark = async (req, res) => {
  try {
    let ballpark = await new Ballpark(req.body)
    await ballpark.save()
    return res.status(201).json({
      ballpark
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateBallpark = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await Ballpark.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('Ballpark not Found, sorry.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBallpark = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Ballpark.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Ballpark deleted')
    }
    throw new Error('Ballpark not Found, sorry')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBallparks,
  getBallparkById,
  createBallpark,
  updateBallpark,
  deleteBallpark
}
