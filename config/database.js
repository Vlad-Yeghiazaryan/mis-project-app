require('dotenv').config()
const Sequelize = require('sequelize')

const isProduction = process.env.NODE_ENV === 'production'
const user = process.env.DB_USER
const pass = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const db = process.env.DB_DATABASE

const connectionString = `postgresql://${user}:${pass}@${host}:${port}/${db}`
const connection = isProduction ? process.env.DATABASE_URL : connectionString
const client = new Sequelize(connection)

module.exports = {
  client
}
