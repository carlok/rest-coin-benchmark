## Debian/Ubuntu installation

 1. Install dotnet core sdk

```
    wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb

    sudo dpkg -i packages-microsoft-prod.deb

    sudo apt-get update; \
      sudo apt-get install -y apt-transport-https && \
      sudo apt-get update && \
      sudo apt-get install -y dotnet-sdk-3.1
```

 2. Launch

```
    dotnet publish -c Release
    dotnet bin/Release/netcoreapp3.1/publish/coinapi.dll --urls="http://0.0.0.0:3000"
```

 3. Test

```
    curl -d '{"bet":"false"}' -H "Content-Type: application/json" -X POST http://0.0.0.0:3000/coin
    
    wrk -t12 -c400 -d120s -s post.lua http://0.0.0.0:3000/coin
```
