package main

import (
        "math/rand"
        "time"

        "github.com/gin-gonic/gin"
)

func random(min, max int) int {
        rand.Seed(time.Now().Unix())
        return rand.Intn(max-min) + min
}

// COIN ...
type COIN struct {
        BET bool `json:"bet" binding:"required"`
}

func main() {
        //r := gin.Default()

        ginMode := "release"
        gin.SetMode(ginMode)
        r := gin.New()
        r.Use(gin.Recovery())

        gin.DisableConsoleColor()
        r.POST("/coin", func(c *gin.Context) {
                var coin COIN
                c.BindJSON(&coin) // coin.BET

                play := random(0, 2) != 0
                // fmt.Printf("coin.BET %v\n", coin.BET)
                // fmt.Printf("play %v\n", play)

                if play == coin.BET {
                        c.JSON(200, gin.H{
                                "win": true,
                        })
                } else {
                        c.JSON(200, gin.H{
                                "win": false,
                        })
                }

        })
        r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
