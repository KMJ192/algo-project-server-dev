# Algorithm study server

### Run application

- npm run

```
yarn start:webpack
```

- pm2 run

```
yarn start:pm2
```

### Build application

- nest build

```
yarn build
```

- all build

```
yarn build:all
```

### Dev stack

- nestjs
- typescript
- mongodb
- webSocket
- webRTC
- pm2
- docker
- nginx
- aws ec2

### Project skill plan

- User
  - sign up
  - sign in
  - auth
  - user info update
- Live share
  - Code writing area
  - Channel Open
  - Chat room
- algorithm / Data structure visualization
- Code analysis for visualization from client's request
  - Tokenization (Each programming laguage, Algorithm for String tokenization)
  - Syntax analysis
  - Response the analysis results to client (json)

### Database

<table>
  <tr>
    <td>Entity</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>User</td>
    <td>email</td>
    <td>pw</td>
    <td>nickname</td>
    <td>userImage</td>
    <td>createDate</td>
    <td>updateDate</td>
    <td>isActivity</td>
  </tr>
</table>

### documents

[nest docs](https://docs.nestjs.kr/)
[pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)

### Project dockerfile

1. build

```
docker build -t algo-server-dev .
```

2. start

```
docker run --rm -d -p port:port algo-server-dev
```

3. Checking the running docker image

```
docker images
```

### mysql 접속

1. database bash 접근

```
docker exec -it algo-project-server-dev_database_1 bash
```

2. 로그인

```
mysql -u <계정명> -p
password 입력
```
