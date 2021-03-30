require('dotenv').config()

module.exports = {
  env: {
    adminDataProvider: process.env.HASURA_ENDPOINT,
  },
}
