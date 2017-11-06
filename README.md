# websocket_benchmark

 - bechmark tool: https://github.com/M6Web/websocket-bench
 - client to send current time to server at every second.

# server side
```
npm install
PORT=8000 ./server.sh
```

# client side
- 환경변수:
  - HOST
  - PORT
  - AMOUNT: 총 persistent connection 수 (default 100)
  - CONCURRENCY: 초당 동시 연결 수 (default 20)
  - GENERATOR: 특정 시간 주기로 액션을 수행하는 스크립트
    - generator_1s.js:  1초 주기로 요청
    - generator_5s.js:  5초 주기로 요청
    - generator_10s.js: 10초 주기로 요청
- 실행 예)
```
HOST=182.161.123.162 PORT=8000 AMOUNT=333 CONCURRENCY=100 GENERATOR=generator_1s.js ./wsbench2.sh
```
