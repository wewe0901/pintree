#!/bin/bash
NODE_VERSION="0.8.4"

# install node.js
wget http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION.tar.gz 
tar -zxvf node-v$NODE_VERSION.tar.gz
cd node-v$NODE_VERSION 
mkdir -p ~/opt/node 
./configure --prefix=~/opt/node
make && make install
touch ~/.bashrc

echo "export PATH=\"\$HOME/opt/node/bin/:\$PATH\"" >> ~/.bashrc 
echo "export NODE_PATH=\"\$HOME/opt/node:\$HOME/opt/node/lib/node_modules\"" >> ~/.bashrc

# install npm
sudo apt-get insatll curl
curl http://npmjs.org/install.sh | sh

# install express
npm install express -gd

# install jade
npm install jade

# install mongodb
npm install mongodb

# install mongoose
npm install mongoose



