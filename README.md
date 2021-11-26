# Algorithm study server

### dev stack

- nsetjs
- typescript
- mongodb
- typeorm
- WebSocket
- webRTC

### 프로젝트 기능 구상

- User
  - sign up
  - sign in
  - auth
  - user info update
- Live share
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
    <td></td>
  </tr>
  <tr>
    <td>User</td>
    <td>id (PrimaryGeneratedColumn)</td>
    <td>email (Primary)</td>
    <td>pw</td>
    <td>nickname</td>
    <td>userImage</td>
    <td>createDate</td>
    <td>updateDate</td>
    <td>isActivity</td>
  </tr>
</table>

### nest docs

[nestjs]<https://docs.nestjs.kr/>

### typeorm docs

[typeorm]<https://typeorm.io/#/>
