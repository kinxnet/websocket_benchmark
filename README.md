# websocket_benchmark

 - bechmark tool: https://github.com/M6Web/websocket-bench
 - client to send current time to server at every second.

# server side
```
npm install
PORT=8000 ./server.sh
```

# client side
- ȯ�溯��:
  - HOST
  - PORT
  - AMOUNT: �� persistent connection �� (default 100)
  - CONCURRENCY: �ʴ� ���� ���� �� (default 20)
  - GENERATOR: Ư�� �ð� �ֱ�� �׼��� �����ϴ� ��ũ��Ʈ
    - generator_1s.js:  1�� �ֱ�� ��û
    - generator_5s.js:  5�� �ֱ�� ��û
    - generator_10s.js: 10�� �ֱ�� ��û
- ���� ��)
```
HOST=182.161.123.162 PORT=8000 AMOUNT=333 CONCURRENCY=100 GENERATOR=generator_1s.js ./wsbench2.sh
```
