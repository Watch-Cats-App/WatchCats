# WatchCats

Inside repository:

```
cd ./web-server
docker build -t cat-server:1.0 .
cd ..
docker tag cat-server:1.0 http://cr.yandex/crped8mo5jtkn5mldmbq/cat-server:1.0
docker push http://cr.yandex/crped8mo5jtkn5mldmbq/cat-server:1.0
```

On server:
```
docker-compose -f docker-compose.yaml pull
docker-compose -f docker-compose.yaml up -d
```
