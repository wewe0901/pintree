#!/bin/bash
NODE_VERSION="0.8.4"

#install node.js
wget http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION.tar.gz 
tar -zxvf node-v$NODE_VERSION.tar.gz
cd node-v$NODE_VERSION 
mkdir -p ~/opt/node 
./configure --prefix=~/opt/node
sudo apt-get install g++
make && make install
touch ~/.bashrc

echo "export PATH=\"\$HOME/opt/node/bin/:\$PATH\"" >> ~/.bashrc 
echo "export NODE_PATH=\"\$HOME/opt/node:\$HOME/opt/node/lib/node_modules\"" >> ~/.bashrc

# install mongodb
sudo apt-get install mongodb


# install npm
sudo apt-get install curl
curl http://npmjs.org/install.sh | sh

# install express
npm install express -gd

