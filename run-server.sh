#!/bin/bash
export HOST=$1 || localhost
export PORT=$2 || 8080

npm run ng build -- --configuration=production && rm -rf server/build && cp -rf dist/panono-angular server/build
npm run start-static-server -- ${HOST} ${PORT}
