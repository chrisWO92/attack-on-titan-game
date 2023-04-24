const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use(cors())
app.use(express.json())

const players = []

class Player {
    constructor(id) {
        this.id = id
    }

    assignTItan(titan) {
        this.titan = titan
    }

    updatePosition(x, y) {
        this.x = x
        this.y = y
    }

    updateImg(pic) {
        this.pic = pic
    }
}

class Titan {
    constructor(name) {
        this.name = name
    }
}

//creates a new player and assigns it an id 
app.get('/join', (req, res) => {
    const id = `${Math.random()}`
    const player = new Player(id)
    players.push(player)
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.send(id)
})

//assigns a name to the player created before
app.post('/attack-on-titan/:playerId', (req, res) => {

    const playerId = req.params.playerId || ''
    const titanName = req.body.titan || ''
    const picture = req.body.img || './src/assets/jaw-titan.png'
    const titan = new Titan(titanName)
    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].assignTItan(titan)
        players[playerIndex].updateImg(picture)
    }
    console.log('PLAYERS:')
    console.log(players)

    res.end()
})

//receives position of the player and saves it in the players array
app.post('/attack-on-titan/:playerId/enemiesposition', (req, res) => {

    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].updatePosition(x, y)
    }

    const enemies = players.filter((player) => playerId !== player.id)
    console.log('ENEMIES:')
    console.log(enemies)
    res.send({
        enemies
    })

    res.end()
})

app.post('/attack-on-titan/:playerId/userposition', (req, res) => {
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0) {
        players[playerIndex].updatePosition(x, y)
    }
    
    let user = null
    user = players.filter((player) => playerId === player.id)

    res.send({
        user
    })

    res.end()
})

app.listen(8080, () => {
    console.log('Servidor Funcionando')
})