## Debian/Ubuntu installation

 1. Install 

    sudo apt install golang
    go get -u github.com/gin-gonic/gin

 2. Launch

    go run example.go

or 

    go build example.go
    ./example

 3. Test

    curl -d '{"bet":"false"}' -H "Content-Type: application/json" -X POST http://0.0.0.0:8080/coin    
    wrk -t12 -c400 -d120s -s post.lua http://0.0.0.0:8080/coin
