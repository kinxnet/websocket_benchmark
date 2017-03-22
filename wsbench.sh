#!/bin/bash
[ -z "$PORT" ] && PORT=8000

[ ! -d ./node_modules ] && npm install
./node_modules/.bin/websocket-bench -k -a 3 -c 3 -g ./generator.js http://localhost:$PORT
