#!/bin/bash

IP=`curl icanhazip.com`

Login=trial`</dev/urandom tr -dc X-Z0-9 | head -c4`
hari="1"
Pass=`</dev/urandom tr -dc a-f0-9 | head -c9`


echo Script AutoCreate Akun SSH dan OpenVPN by Daeng Server
sleep 1
echo Ping Host
echo Cek Hak Akses...
sleep 0.5
echo Permission Accepted
clear
sleep 0.5
echo Membuat Akun: $Login
sleep 0.5
echo Setting Password: $Pass
sleep 0.5
clear
useradd -e `date -d "$masaaktif days" +"%Y-%m-%d"` -s /bin/false -M $Login
exp="$(chage -l $Login | grep "Account expires" | awk -F": " '{print $2}')"
echo -e "$Pass\n$Pass\n"|passwd $Login &> /dev/null
echo -e ""
echo -e "Terimakasih Telah Menggunakan Daeng SSH Server!"
echo -e "Demikian Detail Acoount Yang Telah Dibuat"
echo -e "-----------------------------"
echo -e "Host: $IP" 
echo -e "OpenSSH: 22"
echo -e "Dropbear: 143, 110, 109, 456"
echo -e "SSL/TLS: 222, 443, 777, 990"
echo -e "Port Squid: 80, 3128, 8080 (limit to IP SSH)" 
echo -e "badvpn: 7200/7300"
echo -e "Username: $Login "
echo -e "Password: $Pass"
echo -e "-----------------------------"
echo -e "Aktif Sampai: $exp"
