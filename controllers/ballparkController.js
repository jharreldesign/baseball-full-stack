const Ballpark = require("../models/ballpark")

// get all users
const getAllBallparks = async (req, res) => {
  const users = await Ballpark.find()
  res.json(users)
}

// get single user by id
const getBallparkById = async (req, res) => {
  const ballpark = await Ballpark.findById(req.params.id)
  res.json(ballpark)
}

// get user by name
const getBallparkByName = async (req, res) => {
  try {
    const { teamName } = req.params
    const ballpark = await Ballpark.find({ name: teamName })
    if (!ballpark) {
      return res
        .status(404)
        .json({ message: "User not found! Get the search dogs." })
    }
    res.json(ballpark)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// create ballpark
const createBallpark = async (req, res) => {
  try {
    const ballpark = await new Ballpark(req.body)
    await ballpark.save()
    return res.status(201).json({
      ballpark,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteBallpark = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Ballpark.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Player deleted')
    }
    throw new Error('Ballpark not Found, sorry')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getBallparkByName,
  getAllBallparks,
  getBallparkById,
  createBallpark,
  deleteBallpark
}
