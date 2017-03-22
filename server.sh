#!/bin/bash
[ -z "$PORT" ] && PORT=8000
[ ! -d ./node_modules ] && npm install
PORT=$PORT node server.js
