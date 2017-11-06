#!/bin/bash

[ -z "$PORT" ] && PORT=8000
[ -z "AMOUNT" ] && AMOUNT=3
[ -z "CONCURRENCY" ] && CONCURRENCY=3
[ -z "GENERATOR" ] && PORT=generator.js

[ ! -d ./node_modules ] && npm install
./node_modules/.bin/websocket-bench -k -a ${AMOUNT} -c ${CONCURRENCY} -g ${GENERATOR} http://${HOST}:${PORT}
