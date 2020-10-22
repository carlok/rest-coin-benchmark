package main

/*
Author A.Battezzati (based on Carlok https://github.com/carlok/rest-coin-benchmark/blob/main/server/go/gin/example.go)
*/

import (
        "math/rand"
        "time"
        "github.com/gofiber/fiber"
)

func random(min, max int) int {
        rand.Seed(time.Now().Unix())
        return rand.Intn(max-min) + min
}

type COIN struct {
        BET bool `json:"bet" binding:"required"`
}

func main() {
  app := fiber.New()
  app.Post("/coin", func(c *fiber.Ctx) error {
    coin := new(COIN)   
    c.BodyParser(coin)
    play := random(0, 2) != 0
    var res string
    if play == coin.BET {
      res = "{\"win\":true}"  
    } else {
       res = "{\"win\":false}"
    } 
    return c.SendString(res)
  })
  app.Listen(":3000")
}