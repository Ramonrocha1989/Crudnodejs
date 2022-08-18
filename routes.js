const { application } = require('express')
const express = require('express')
const routes = express.Router()

const UsersController = require('./controllers/UsersController')

routes.get('/userslist', UsersController.index)
    .post('/userscreate', UsersController.store)
    .put('/userschange', UsersController.change)
    .delete('/usersdel', UsersController.delete)

module.exports = routes;