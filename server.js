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

    //for assigning a titan to a player
    assignTItan(titan) {
        this.titan = titan
    }

    //update position
    updatePosition(x, y) {
        this.x = x
        this.y = y
    }
}

class Titan {
    constructor(name){
        this.name = name
    }
}

//endpoint
app.get('/join', (req, res) => {
    const id = `${Math.random()}`
    const player = new Player(id)
    players.push(player)
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.send(id)
})


app.post('/attack-on-titan/:playerId', (req, res) => {
    
    //params method is used to catch the ":userId" string that comes in the url
    const playerId = req.params.playerId || ""
    
    //we catch the titan name that was sent in the body of the post request function, in the frontend, selecTitan()
    const titanName = req.body.titan || 'empty'

    //we create an instance of the class Titan and pass it the name received
    const titan = new Titan(titanName)

    //use findIndex function to iterate through players array and get the index of the element that has the same id than the titan selected in the frontend
    const playerIndex = players.findIndex((player) => playerId === player.id)

    //if index is found then assign the name received to the player with the id, and ussing the assignTitan function of the class Player
    //this if statement so assign the titan selected in the frontend to the player
    if (playerIndex >= 0) {
        players[playerIndex].assignTItan(titan)
    }
    //in post request it's neccesary to end the endpoint
    console.log(playerId)
    console.log(players)
    res.end()
})

app.post('/attack-on-titan/:playerId/position', (req, res) => {
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    const playerIndex = players.findIndex((player) => playerId === player.id)
    if (playerIndex >= 0) {
        players[playerIndex].updatePosition(x, y)
    }

    //function to create an array with all the players less the current player
    const enemies = players.filter((player) => playerId !== player.id)

    res.send({
        enemies
    })

    res.end()
})

app.listen(8080, () => {
    console.log('Servidor Funcionando')
})