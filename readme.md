# memesexchange is the only cryptocurrency exchange selling Fartcoins!
```
sudo apt-get update
sudo apt-get install build-essential libssl-dev curl -y
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
bash install_nvm.sh
sudo reboot
nvm install 8.0.0
git clone https://github.com/fartcoin-project/memesexchange.git
cd memesexchange
sudo npm install 
```
# Edit your private constants
Fill private_constants(EMPTY).js and rename it to:
 ~/memesexchange/server/modules/private_constants.js

Website constants 
 ~/memesexchange/server/constants.js 
 ~/memesexchange/static_pages/chart.html

**After, you can run exchange**

```
cd  ~/memesexchange/server
sudo node main.js
```
You will now see memesexchange at https://127.0.0.1:13337

# Add trade pairs
For each coin you should create *.conf file
```
rpcuser=long_random_string_one
rpcpassword=long_random_string_two
rpcport=12345

rpcallowip=127.0.0.1
server=1
daemon=1
upnp=0
rpcworkqueue=1000
enableaccounts=1
litemode=1
staking=0
addnode=1.2.3.4
```



After that, you coins should appear on the main page.





