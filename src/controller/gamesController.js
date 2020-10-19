const games = require('../model/games.json')

const updateGameByName = (req, res) => {
    const { name } = req.query
    const nameGame = games.find(item => item.name == name)
    const updateGame = req.body

    const updateName = nameGame.indexOf(name)
    const updateGameName = { name, ...updateGame }

    games.splice(updateName, 1, updateGameName)

    res.status(200).send(games.find(item => item.name ===name))
    console.log(games)
}


module.exports = {
    updateGameByName
}