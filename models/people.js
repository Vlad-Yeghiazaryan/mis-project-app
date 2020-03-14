const { client } = require('../config/database')
const Sequelize = require('sequelize')

const Model = Sequelize.Model
class PPL extends Model { }

// options
const modelOptions = {
  sequelize: client,
  modelName: 'mytable'

}
// attributes
const modelattributes = {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  program: {
    type: Sequelize.STRING
  },
  season: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  sendAds: {
    type: Sequelize.BOOLEAN
  }
}

async function People () {
  await PPL.init(modelattributes, modelOptions)
  await PPL.sync()
  return PPL
}

module.exports = People
