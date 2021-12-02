
- build and launch

```cmd
dotnet publish -c Release -o /out
dotnet /out/coinapi.dll --urls http://0.0.0.0:3000
```

 - build pgo + self contained

```cmd
dotnet publish -r linux-x64 --self-contained true -p:PublishSingleFile=true -p:PublishTrimmed=true -p:TrimMode=link -p:PublishReadyToRun=true -o /out

/out/coinapi --urls http://0.0.0.0:3000
```


```bash
wrk -t1 -c40 -d10s -s "/client/post.lua" http://localhost:3000/coin
Running 10s test @ http://localhost:3000/coin
  1 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   550.96us    3.88ms  77.58ms   98.88%
    Req/Sec   117.66k    16.15k  139.34k    83.00%
  1169769 requests in 10.00s, 190.21MB read
Requests/sec: 116971.32
Transfer/sec:     19.02MB

wrk -t12 -c400 -d120s -s "/client/post.lua" http://localhost:3000/coin
Running 2m test @ http://localhost:3000/coin
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.22ms    2.66ms  99.71ms   93.79%
    Req/Sec    11.32k     2.40k   39.35k    76.73%
  16230411 requests in 2.00m, 2.58GB read
Requests/sec: 135147.07
Transfer/sec:     21.98MB


wrk -t12 -c400 -d120s -s "/client/post.lua" http://localhost:3000/coin
Running 2m test @ http://localhost:3000/coin
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.97ms    2.56ms 107.78ms   94.88%
    Req/Sec    12.39k     2.33k   34.56k    77.27%
  17758185 requests in 2.00m, 2.82GB read
Requests/sec: 147896.61
Transfer/sec:     24.05MB
```