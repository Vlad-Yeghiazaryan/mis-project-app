const getPeople = require('../services/getPeople')

async function refreshControl (req, res, next) {
  await res.json(await getPeople())
}

module.exports = {
  refreshControl
}
