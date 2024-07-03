#!/bin/bash

startWithCode() {
  node --trace-warnings connect.js cd
}

startWithQr() {
  node --trace-warnings connect.js qr
}

defaultStart() {
  node --trace-warnings connect.js
}

while :
do
  echo -e "\033[1;33mINICIANDO HUTAO BOT V6.0 ^-^ \n AGUARDE UM MOMENTO...🌸\033[0m"
  if [ "$1" = "cd" ]; then
    startWithCode
  elif [ "$1" = "qr" ]; then
    startWithQr
  else 
    defaultStart
  fi
  sleep 1
done
