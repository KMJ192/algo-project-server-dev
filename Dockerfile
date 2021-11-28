# node version 설정
FROM node:15.5

# package 복사
COPY package*.json .

# package.json에 설정된 내용 install
RUN npm install

# wasm_module 폴더 복사
COPY wasm_module .

# Install PM2
RUN npm install -g pm2

# docker container의 timezone을 서울로 변경
ENV TZ=Asia/Seoul

# application 실행
# CMD npm run start:webpack
CMD ["pm2-runtime", "start", "ecosystem.config.js"]

# 8080포트 사용
EXPOSE 8080