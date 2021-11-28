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

- wasm build

```
wasm-pack build wasm_module
```

- nest build

```
yarn build
```

- all build

```
yarn build:all
```

### Dev stack

- nsetjs
- typescript
- mongodb
- typeorm
- WebSocket
- webRTC
- pm2
- Docker

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

### database

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

- <https://docs.nestjs.kr/> - nest
- <https://typeorm.io/> - typeorm
- <https://pm2.keymetrics.io/docs/usage/quick-start/> - pm2

### MongoDB Docker

1. Download MongoDB Docker image

```
docker pull mongo
```

2. Check Docker image

```
docker images
```

3. Create Mongo container and run Docker (this exam, set container name => mongodb-container)

```
docker run --name mongodb-container -v ~/data:/data/db -d -p 27017:27017 mongo
```

4. Check Docker container list

```
docker ps -a
```

5. start, stop, restart the MongoDB Docker container

```
// start
docker start mongodb-container

// stop
docker stop mongodb-container

// restart
docker restart mongodb-container
```

6. eccess to MongoDB Docker container

```
docker exec -it mongodb-container bash
```
