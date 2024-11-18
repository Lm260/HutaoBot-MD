#!/bin/bash

startWithCode() {
  NODE_ENV=production node --no-warnings connect.js cd
}

startWithQr() {
  NODE_ENV=production node --no-warnings connect.js qr
}

defaultStart() {
  NODE_ENV=production node --no-warnings connect.js
}

while :
do
  echo -e "\033[1;33mINICIANDO HUTAO BOT V7.5 ^-^\n QUASE PRONTO, AGUARDE UM MOMENTO...🌸\033[0m"
  if [ "$1" = "cd" ]; then
    startWithCode
  elif [ "$1" = "qr" ]; then
    startWithQr
  else 
    defaultStart
  fi
  sleep 1
done
