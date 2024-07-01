#!/bin/bash
YELLOW='\033[1;33m'

while :
do
  printf "${YELLOW}\nINICIANDO HUTAO BOT V6.0 ^-^ \n AGUARDE UM MOMENTO...🌸\n"
  if [ "$1" = "cd" ]; then
    node connect.js cd
  elif [ "$1" = "qr" ]; then
    node connect.js qr
  else 
    node connect.js
  fi
  sleep 1
done