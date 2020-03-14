const People = require('../models/people')

async function getPeople () {
  // Getting people from database and sending it
  const people = await People()
  const peopleTable = await people.findAll()
  return peopleTable
}

module.exports = getPeople
