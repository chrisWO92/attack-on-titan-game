/* const express = require("express")
const app = express()
const port = process.env.PORT || 8080

const cors = require("cors")
app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
    constructor(id){
        this.id = id
    }
}

//when recives a request in main / then answer whith "hola"
app.get('/join', (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.send(id)
})

app.post('/attack-on-titan/:userId', (req, res) => {
    const userId = req.params.userId || ''
    console.log(users)
    console.log(userId)
    res.end()
})

//listen continually any request on port 8080
app.listen(port, () => {
    console.log("Server Working")
}) */