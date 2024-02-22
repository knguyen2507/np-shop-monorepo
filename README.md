# StoreMonorepo

## Tạo 1 app hoặc lib mới

Tạo 1 app mới (Angular)

```
pnpm nx g @nx/angular:application <appName> --port=<portNumber> --directory=apps/template/<appName>
```

Tạo 1 app mới (NestJS)

```
pnpm nx g @nx/nest:application <appName> --directory=apps/services/<appName>
```

Tạo 1 lib mới

```
nx g @nx/angular:library <libName> --directory=libs/template/<libName>
nx g @nx/nest:library <libName> --directory=libs/service/<libName>
```

## Sử dụng Prisma

Generate Prisma Client

```
pnpm nx run prisma:generate-auth
pnpm nx run prisma:generate-shop
pnpm nx run prisma:generate-all
```

## Chạy chương trình

Chạy 1 app

```
pnpm nx serve <appName>
```

Chạy nhiều app (tối đa 3 app mỗi dòng lệnh)

```
pnpm nx run-many -t serve -p <appName1> <appName2> ...
```

Chạy tất cả app

```
pnpm nx run-many -t serve --all --maxParallel=100
```

Build docker image

```
pnpm docker:duild
```

## Chạy chương trình trên Local

Chạy file docker-compose.yml trong thư mục script/store-docker để tạo Docker Images

```
docker compose up -d
```

Tạo file package.json

```
pnpm i
```

Generate prisma

```
pnpm nx run prisma:generate-all
```

Chạy app

```
pnpm nx run-many -t serve -p auth shop
pnpm nx run-many -t serve -p store-template admin-template
```

## Localhost

Api Documentation

```
http://localhost:3000/msx-auth/docs
http://localhost:3000/msx-shop/docs
```

Website cửa hàng

```
http://localhost:4202/cua-hang
```

Website quản lý

```
http://localhost:4201/quan-ly
```

Tài khoản Super Admin

```
username: sa001
password: 123456
```
