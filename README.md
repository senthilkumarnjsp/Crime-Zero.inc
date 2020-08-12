# Crime-Zero.inc

Assessment for FullStack Developer | Ownerstown

## What is the use of this Repository

This Project is a Simple MERN Stack Project which demonstrates the following

1. Creating a Fuctional Components in React
2. Making HTTP calls using fetch API method
3. Communicating between parent and child component
4. Using NodeJS for backend
5. Creating backend endpoint APIs in NodeJS
6. Connecting ReactJS app to the backend NodeJS server
7. Using Basic Routing in React

This project has been created as an Assessment for FullStack Developer

## Description about the project

The time is set in a dystopian future when crime is a global issue. Crime Zero Inc. sets up a SMS
service where you type in 0 <space> <code> to call for a super hero for rescue. You are assigned
the job of developing a system that reads this code and translates into possible names of super
heroes so that Crime Zero Inc. can send a distress signal to alarm your savior.
The program should map the standard telephone keypad numbers to corresponding letters with the
given set of super hero names. See APPENDIX for the list of names.

E.g.:
4855 generates the following combination of words: [gvlj, htkl, itlj, hulk, gtjj, hvlk, …]
Out of the 81 combinations, only hulk is a valid name. This is arrived by mapping numbers to
letters in the following manner:
4 – h
8 – u
5 – l
5 – k

### How to call a super hero for rescue

Initially, the key `0` only will be enabled. To activate other keys, you need to press the `0` and then once the key `0` is disabled and the key `#` enabled press `#`. This will make all other keys except `0` and `#` enabled _(to prevent accidental key strokes of 0 and # after the first time)_

Then you can input the keys to call a super hero like the example mentioned above and press the hero name in the list displayed below the keypad area _(You can even press `*` to call the super hero once you have completed the code, otherwise it will show an error in an alert box)_

If you have entered wrong input, _NO WORRIES_. You will be given a clear option once you click the key `0` initially. Click on it will clear the input entered and present you the starting stage of calling the super hero i.e. enabling other keys by pressing `0`

Once you are in the result page, you can come back and play around with more inputs by clicking **`Call Another Hero`** button in the result page _(Although an alternate would be clicking the header i.e. Crime-Zero.inc)_

## List of heroes available for rescue

```
SUPERMAN THOR ROBIN IRONMAN GHOSTRIDER CAPTAINAMERICA FLASH WOLVERINE
BATMAN HULK BLADE PHANTOM SPIDERMAN BLACKWIDOW HELLBOY PUNISHER
```

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install Nodejs

### Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

or you can use the shorthand

```bash
npm i -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local with the following git command in terminal or in CMD

```bash
git clone https://github.com/senthilkumarnjsp/Crime-Zero.inc.git
```

To install all the npm packages, Go into the project folder `(Crime-Zero.inc)` and type the following commands to install all npm packages

1. To install concurrently (This is to install both client and server side dependencies in a single command)

```bash
npm install
```

2. To install both client and server side dependencies in a single command

```bash
npm run install-all
```

In order to `run` the application Type the following command in `Crime-Zero.inc` directory

```bash
npm run start
```

The React application runs on **localhost:3000** and the Node server runs on **localhost:2770**

## Dependencies

#### Client Dependency

1. **`react-router-dom`** : This package is to use routing inside our React app _(to give our Single Page Application (SPA) application a multipage feel)_

#### Server Dependencies

1. **`express`** : This package is to provide small, robust tooling for HTTP servers

2. **`cors`** : This package is for providing a Connect/Express middleware that can be used to enable CORS with various options

3. **`helmet`** : This package helps you secure your Express apps by setting various HTTP headers

4. **`morgan`** : This is a HTTP request logger middleware for node.js

5. **`nodemon`** : This is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected _(installed as a development dependency in this application)_

## Application Design

#### Components

1. **Rescue** Component : This Component is the parent component for both `Keypad` and `Heroes` components

2. **Keypad** Component : This Component displays the Keypad to input the code for the corresponding hero. Depending on the keystroke, the list will be served to the `Heroes` component

3. **Heroes** Component : This Component displays a list of heroes. This Component gets the data from the backend node server running on port 2770 by hitting an endpoint which sends back the list. The items in this listing `Heroes` component are clickable

4. **Hero** Component : This Component Displays the Image and name of the selected Hero. This Component gets its data from the same node server with different endpoint which sends the image

#### HTTP client

**fetch** builtin library to make http calls
