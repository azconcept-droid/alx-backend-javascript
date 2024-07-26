#  0x00. ES6 Basics
``JavaScript`` ``ES6``

1. First, turn off compression:
git config --global core.compression 0

2. do a partial clone to truncate the amount of info coming down: 
git clone --depth 1 <repo_URI>

3. go into the new directory and retrieve the rest of the clone: 
git fetch --unshallow

4. do a regular pull: 
git pull --all

Install NodeJS 12.11.x

(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3

Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.
