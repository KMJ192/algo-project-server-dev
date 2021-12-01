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

- <https://docs.nestjs.kr/> - nest
- <https://typeorm.io/> - typeorm
- <https://pm2.keymetrics.io/docs/usage/quick-start/> - pm2

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

### Project docker-compose.yml

1. Run docker-compose on background

<table>
  <tr>
    <td>Option</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>-d</td>
    <td>Run on background</td>
  </tr>
  <tr>
    <td>--no-deps</td>
    <td>Don't run link service</td>
  </tr>
  <tr>
    <td>--build</td>
    <td>Build image</td>
  </tr>
  <tr>
    <td>--t</td>
    <td>Setting timeout (default 10s)</td>
  </tr>
</table>
```
docker-compose up -d
```

2. Confirm running container

```
docker-compose ps
```

3. Display containers logs

```
docker-compose logs
```

4. Run specific order to run container

```
docker-compose run <service name> <option>
```

5. start/stop/pause/unpause/restart specific service or services

```
docker-compose start <service name>
docker-compose stop <service name>
docker-compose pause <service name>
docker-compose unpause <service name>
docker-compose restart <service name>
```

6. Remove created container all-togather

```
docker-compose rm
```

7. Compulsion stop fo running conainer

```
docker-compose kill
```

8. Confirm service's info

```
docker-compose port
```
