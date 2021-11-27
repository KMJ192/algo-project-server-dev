# Algorithm study server

### run in local

```
npm start:webpack
yarn start:webpack
```

### dev stack

- nsetjs
- typescript
- mongodb
- typeorm
- WebSocket
- webRTC
- pm2
- Docker

### 프로젝트 기능 구상

- User
  - sign up
  - sign in
  - auth
  - user info update
- Live share
  - 코드 작성 구역
  - Channel Open
- 알고리즘 / 소스코드 시각화
- client로부터 입력받은 소스코드 시각화를 위한 코드 분석
  - 토큰화(각각 programming laguage별로 string tokenization)
  - 구문분석
  - client에 분석내용 전달

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

### nest docs

<https://docs.nestjs.kr/>

### typeorm docs

<https://typeorm.io/#/>

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
