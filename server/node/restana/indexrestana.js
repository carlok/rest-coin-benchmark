const app = require('restana')({})
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/coin', async (req, res) => {
    var result = play(req.body.bet);
    res.body = String(result);    
    res.send()
})


function play(bet) {
  const toss = Math.floor(Math.random() * Math.floor(2)) == 0 ? true : false

  // console.log('bet', bet)
  // console.log('toss', toss)

  return toss === bet ? true : false
}


app.start(3000) 