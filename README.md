# Track Your Journey

### Table of Contents
- [Track Your Journey](#track-your-journey)
    - [Table of Contents](#table-of-contents)
  - [Overview and Project Goals](#overview-and-project-goals)
  - [To Login](#to-login)
      - [For traveler](#for-traveler)
      - [For Agent](#for-agent)
  - [Features](#features)
  - [Why was this project created?](#why-was-this-project-created)
  - [Technologies Used](#technologies-used)
  - [- Mocha & Chai](#--mocha--chai)
  - [Setup](#setup)
  - [How to View Your Code in Action](#how-to-view-your-code-in-action)
  - [How to View Your Code in Action](#how-to-view-your-code-in-action-1)
  - [Test Files Organization](#test-files-organization)
  - [Running Your Tests](#running-your-tests)
  - [Credits](#credits)
      - [Authors](#authors)
      - [Code Reviewer](#code-reviewer)
      - [Project Manager](#project-manager)
          - [This project was created for Turing School of Software and Design](#this-project-was-created-for-turing-school-of-software-and-design)
          - [2021/04/27](#20210427)
  
## Overview and Project Goals
The [goal](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html) of this solo final project I did for Mod2 at [Turing School of Software and Design](https://turing.io/) is to build an application to track travlers info using given API data from scratch using HTML, SCSS, CSS, and Vanilla Javascript.

---

## To Login
#### For traveler
- Username: traveler + any number 1 - 50
- Password: traveler2020

#### For Agent
- Username: asiisii
- Password: 2102FE

---
## Features 
Traveler Login/Dashboard: 
Traveler can login using above credentials. After successfully logging in, traveler will be able to see all their history and upcoming trips. They have options to request for a new trip as well. On load they will be able to see how much they have spent in current year. 
![Traveler Dashbaord](./src/images/traveler.gif)

Agent Login/Dashboard:
Agent can login using above credentials. After sucessfully loggin in, they will be able to see their yearly income and travelers requested trips. By clicking on a trip card they can reject the traveler's request as well. 
![Agent Dashbaord](./src/images/agent.gif)



## Why was this project created?
To solidify and demonstrate the understanding of:
- Using OOP to drive the design of the application and the code
- Working with an API to send and receive data
- Creating a robust test suite that thoroughly tests all functionality of a client-side application

## Technologies Used
- HTML
- CSS/Sass 
- Webpack (Sass compiler)
- Javascript
- Mocha & Chai
---

## Setup
1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
2. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
3. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
4. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
5. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets
After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo. 

Then install the library dependencies. Run:

```bash
npm install
```
---

## How to View Your Code in Action
1. You'll need this [Webpack Starter Kit](https://github.com/turingschool-examples/webpack-starter-kit) repo. Setup instructions are in the README. You will also need to clone down this local server and have it running in a separate tab in your terminal each time you run your client.
2. Click on this [website link](https://asiisii.github.io/Track-Your-Journey/)

---

## How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `box-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---
## Credits
#### Authors
<table>
    <tr>
        <td> Ashish Malla <a href="https://github.com/asiisii">GH</td>
    </tr>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/36644181?s=400&u=bac07fd62de7d01a09ce8f27f88590d5caa202df&v=4" alt="Asiisii GH img"
 width="150" height="auto" /></td>
    </tr>
</table>

#### Code Reviewer
<table>
    <tr>
      <td> Tyson McNutt <a href="https://github.com/tysnj">GH (accountabilibuddy)</td>
    </tr>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/65634894?v=4" alt="Tyson McNutt GH img"
 width="150" height="auto" /></td>
</tr>
</table>

#### Project Manager
<table>
    <tr>
         <td> Hannah Hudson <a href="https://github.com/hannahhch">GH</td>
    </tr>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/26528259?s=400&u=fa83afc7263cd5ba9b3a9f07e8ae78543c359063&v=4" alt="hannahhch GH img"
 width="150" height="auto" /></td>
</tr>
</table>


**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 2021/04/27
**[Back to top](#table-of-contents)**
