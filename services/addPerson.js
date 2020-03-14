const People = require('../models/people')

async function addPerson (obj) {
  // Getting people from database and sending it
  const people = await People()
  await people.create(obj)
}

module.exports = addPerson
