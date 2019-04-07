const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.post(
    "/",
    (req, res) => {
      db.insert(req.body)
      db .insert('/n')
} )

const Datastore = require('nedb')
const db = new Datastore({
        filename: 'mydb.db',
        autoload: true
})


app.get(
    '/',
    (req, res) => {
      db.find({},(a,b) => res.send(b))
    }
)
app.listen(3000)
