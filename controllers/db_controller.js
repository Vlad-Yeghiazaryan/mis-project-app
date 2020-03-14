const addPerson = require('../services/addPerson')
const getPeople = require('../services/getPeople')

async function dbControl (req, res, next) {
  console.log(req.body)
  await addPerson(req.body)
  await res.json(await getPeople())
}

module.exports = {
  dbControl
}
