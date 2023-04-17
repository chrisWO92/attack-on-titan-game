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

const users = []

class User {
    constructor(id) {
        this.id = id
    }
}

app.get('/join', (req, res) => {
    const id = `${Math.random()}`
    const user = new User(id)
    users.push(user)
    res.setHeader("Access-Control-Allow-Origin", '*')
    res.send(id)
})

app.listen(8080, () => {
    console.log('Servidor Funcionando')
})