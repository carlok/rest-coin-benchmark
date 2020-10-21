const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

function play(bet) {
  const toss = Math.floor(Math.random() * Math.floor(2)) == 0 ? true : false
  return toss === bet ? true : false
}


app.post('/coin', (req, res) => {          
   res.json(play(req.body.bet))
})

// run the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})