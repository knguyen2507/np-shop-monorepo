## Docker

create docker image msx-auth

```
pnpm auth:docker:build
```

create docker image msx-shop

```
pnpm shop:docker:build
```

create docker image

```
pnpm docker:build
```

run docker image

```
docker compose up -d
```

push docker image to hub

```
docker tag msx-auth <username>/msx-auth
docker tag msx-shop <username>/msx-shop
docker push <username>/msx-auth
docker push <username>/msx-shop
```
