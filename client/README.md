Inside repository:

```
docker build -t cat-client:1.0 .
docker tag cat-client:1.0 cr.yandex/crped8mo5jtkn5mldmbq/cat-server:cat-client-1.0
docker push cr.yandex/crped8mo5jtkn5mldmbq/cat-server:cat-client-1.0
```
