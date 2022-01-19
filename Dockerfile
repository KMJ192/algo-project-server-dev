# node version 설정
FROM node:16.13.1

# package 복사
COPY package.json .

# 전체 파일 복사
COPY . .

# package.json에 설정된 내용 install
RUN npm install --save --legacy-peer-deps

# Install PM2
RUN npm install -g pm2

# docker container의 timezone을 서울로 변경
ENV TZ=Asia/Seoul

RUN npm run build

# application 실행
# CMD npm run start:webpack
CMD ["pm2-runtime", "start", "ecosystem.config.js"]

# 3000포트 사용
EXPOSE 3000
