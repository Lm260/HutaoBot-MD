#!/bin/bash

startWithCode() {
  NODE_ENV=production node --no-warnings main.js cd
}

startWithQr() {
  NODE_ENV=production node --no-warnings main.js qr
}

defaultStart() {
  NODE_ENV=production node --no-warnings main.js
}

while :
do
  echo -e "\033[1;33mHUTAO BOT V8.0 UPDATE 💎 ^-^\n INICIANDO, AGUARDE UM MOMENTO...🌸\033[0m"
  if [ "$1" = "cd" ]; then
    startWithCode
  elif [ "$1" = "qr" ]; then
    startWithQr
  else 
    defaultStart
  fi
  sleep 1
done
