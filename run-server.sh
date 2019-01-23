#!/bin/bash
export HOST=$1
export PORT=$2
export ROOT=$3

#npm run ng build -- --configuration=production && rm -rf server/build && cp -rf dist/panono-angular server/build
npm run start-static-server
