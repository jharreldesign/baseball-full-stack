const { Schedule } = require('../models')

const getAllSchedules = async (req, res) => {
  try {
    let schedule = await Schedule.find({})
    res.json(schedule)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getScheduleById = async (req, res) => {
  try {
    let { id } = req.params
    let schedule = await Schedule.findById(id)
    if (schedule) {
      return res.json(schedule)
    }
    return res.status(400).send('Scheduled game with the specified ID does not exist')
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(404).send('That scheduled game does not exist!')
    }
    return res.status(500).send(error.message)
  }
}

const createSchedule = async (req, res) => {
  try {
    let schedule = await new Schedule(req.body)
    await schedule.save()
    return res.status(201).json({
      schedule
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateSchedule = async (req, res) => {
  try {
    let { id } = req.params
    let updated = await Schedule.findByIdAndUpdate(id, req.body, { new: true })
    if (updated) {
      return res.status(200).json(updated)
    }
    throw new Error('Scheduled game not Found, sorry.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteSchedule = async (req, res) => {
  try {
    let { id } = req.params
    let deleted = await Schedule.findByIdAndDelete(id)
    if(deleted){
      return res.status(200).send('Schedled game deleted')
    }
    throw new Error('Scheduled game not Found, sorry')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule
}
