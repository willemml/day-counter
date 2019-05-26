# Day counter [![Build Status](https://travis-ci.org/wnuke/day-counter.svg?branch=master)](https://travis-ci.org/wnuke/day-counter)

This app is built using electron forge and counts the days from a set date til now.

### Install:

###### Ubuntu:

```bash

# Install nodejs, npm and gdebi
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs npm gdebi

# Install electron-forge and build app
sudo npm install electron-forge -g
electron-forge install wnuke/day-counter

```

###### macOS:

```bash

# Install nodejs and npm
brew install node

# Install electron-forge and the app
sudo npm install electron-forge -g
electron-forge install wnuke/day-counter

```

###### #NOTE:

If counters are not appearing you need to create day-counter-data.json in your appData folder.

On Ubuntu it's ``~/.config/day-counter-data.json``

On macOS it's ``~/Library/Application\ Support/day-counter-data.json``

On Windows it's ``%appdata%/day-counter-data.json``

### Build:

###### Ubuntu:

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
