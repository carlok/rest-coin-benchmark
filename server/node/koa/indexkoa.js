const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

function play(bet) {
  const toss = Math.floor(Math.random() * Math.floor(2)) == 0 ? true : false
    
  return toss === bet ? true : false
}


router.post('/coin', async (ctx, next) => {
    ctx.type = 'application/json; charset=utf-8';
    ctx.body = play(ctx.request.body.bet);                             
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);