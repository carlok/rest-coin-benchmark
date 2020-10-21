## Debian/Ubuntu installation

 1. Install 

    sudo apt install golang
    go get github.com/gofiber/fiber


 2. Launch

	go run server.go

or 

	go build server.go
	./server


 3. Test

    curl -d '{"bet":"false"}' -H "Content-Type: application/json" -X POST http://0.0.0.0:3000/coin    
    wrk -t12 -c400 -d120s -s post.lua http://0.0.0.0:3000/coin
