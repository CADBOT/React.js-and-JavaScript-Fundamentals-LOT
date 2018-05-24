# Lesson 1 Install and Verify your React Toolchain

## Installing Node.js

The latest version of Nodejs can be installed at https://nodejs.org/en/
MacOs, Windows, and Ubuntu users can install directly from that site, but OS
specific installation techniques might be preferred. Some of these are detailed
below

For the purpose of this course please install the current version *not* the LTS version.

This iteration of the course was built with Node.js 10.1.0 and should work with all future
versions of Node.js. Prior versions of Node.js are not guaranteed to work with this course,
but you might have luck with everything but newer ES6 features.


### MacOs
The Mac users can install via homebrew: https://brew.sh/

After installing homebrew, you can install nodejs via this command

```
brew install node
```
This will install the latest current version to your system

### Ubuntu
*Do not* install the default nodejs from apt. It will most likely be too old for this course.
Instead add the offical 10.x PPA

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Windows
I like to use chocolatey as a command line installer for windows: https://chocolatey.org/

After you get the tool installed, go into your shell and input
```
choco install nodejs
```

## Verifying your Node.js installation

Run the following command in the terminal
```
node -v
```
It will print the version of Node.js installed. Verify the number is high enough for this course

## Yarn vs NPM (For the curious. Feel free to ignore and just use npm)

As of present npm and yarn are both capable package managers. There is some interesting history about
what brought about yarn and the subtle differences between the two, but those details aren't important
at this point in time. For this course we will be using npm. You could drop in yarn and get equally
good results, but remember to use the equivalent yarn command instead of the npm one. Here is a reference
on the syntax: https://yarnpkg.com/lang/en/docs/migrating-from-npm/

## Installing create-react-app

More likely than not, this command will install create react app for you
```
npm install -g create-react-app
```
Depending on the details of how you installed npm/yarn you might have to add
sudo before the command. [Having to add sudo works but isn't ideal](https://github.com/joaojeronimo/rimrafall)

## Verifying create-react-app

Run the following commands
```
create-react-app first-react-app
cd first-react-app
npm start
```
Depending on your system/setup it should open up your default web browser to your demo react page. If not look
at the output for the npm start command you just ran. You should see something like "On your Network: http://192.168.37.106:3000/"
The address it gives you might be slightly different. If your browser didn't open, open the browser manually and enter the address
specifed  including the : and numbers after the :.

There is extensive help and documentation here: https://github.com/facebook/create-react-app
