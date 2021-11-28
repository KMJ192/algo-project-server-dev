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

- nestjs
- typescript
- mongodb
- typeorm
- webSocket
- webRTC
- pm2
- docker

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

- <https://docs.nestjs.kr/> - nest
- <https://typeorm.io/> - typeorm
- <https://pm2.keymetrics.io/docs/usage/quick-start/> - pm2

### Project docker

1. build

```
docker build -t <tag-name> .
```

2. start

```
docker run --rm -d -p port:port <tag-name>
```

3. Checking the running docker image

### MongoDB docker

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
docker run --name algo-project-mongodb -v ~/data:/data/db -d -p 27017:27017 mongo
```

4. Check Docker container list

```
docker ps -a
```

5. start, stop, restart the MongoDB Docker container

```
// start
docker start algo-project-mongodb

// stop
docker stop algo-project-mongodb

// restart
docker restart algo-project-mongodb
```

6. Access to MongoDB Docker container

```
docker exec -it algo-project-mongodb bash
```

### etc

1. Confirm running docker image all

```
docker ps -a -s
```

2. Confirm docker images

```
docker images
```

3. Delete docker image

```
docker rmi <image id>
```
