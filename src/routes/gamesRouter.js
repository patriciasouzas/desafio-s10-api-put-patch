const express = require('express')
const controller = require('../controller/gamesController')
const router = express.Router()
const cors = require('cors')

router.put('/jogos/:name', cors(), controller.updateGameByName)

module.exports = router