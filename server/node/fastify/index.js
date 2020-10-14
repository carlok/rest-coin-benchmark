const fastify = require('fastify')({
  logger: false
})

function play(bet) {
  const toss = Math.floor(Math.random() * Math.floor(2)) == 0 ? true : false

  // console.log('bet', bet)
  // console.log('toss', toss)

  return toss === bet ? true : false
}

// http -j --verbose POST http://0.0.0.0:3000/coin bet:=false
fastify.post('/coin', async (request, reply) => {
  return {
    win: play(request.body.bet)
  }
})

// run the server
const start = async () => {
  try {
    await fastify.listen(3000)
    // fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()