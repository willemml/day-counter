# Day counter

This app is built using electron forge and counts the days from a set date til now.

### Build:

###### Ubuntu / linux:

```bash

# Install nodejs and npm
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs npm

# Install electron-forge and build app
sudo npm install electron-forge -g
git clone https://github.com/wnuke/day-counter.git
cd day-counter
npm install
electron-forge make

```

###### macOS:

Install Homebrew from https://brew.sh/

```bash

# Install nodejs and npm
brew install node

# Install electron-forge and build app
sudo npm install electron-forge -g
git clone https://github.com/wnuke/day-counter.git
cd day-counter
npm install
electron-forge make

```
