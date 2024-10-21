
const { User } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    let user = await User.find({})
    res.json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    let { id } = req.params
    let user = await User.findById(id)
    if (user) {
      return res.json(user)
    }
    return res.status(400).send('The user with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That user does not exist!')
    }
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    let user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('User not Found, sorry.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await User.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('User deleted')
    }
    throw new Error('User not Found, sorry')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
