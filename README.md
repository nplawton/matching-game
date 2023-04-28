# Matching Game
---

## Description
---
> Simple matching game taking in a set of data and turning elements from the database rows into cards. Want to know more about the card displayed use the search menu section to read up on the creature from the DnD fantasy world.

![match1](https://live.staticflickr.com/65535/52852396038_f606745b00_b.jpg)

## Table of Contents
---
- [Matching Game](#matching-game)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Tech](#tech)
- [License](#license)


## Installation
---
** Project was initially built deploying on Render cloud service but have been converted to deploy using a Docker container. To deploy on Render uncommit out this line: const pool = require('./dbConn'), and commit out the other const pool object. This must be done on the sever.js, seed.js, and migrate.js files. **

- In a new terminal inside the server folder open and run npm install
- After the dependencies are install run: docker-compose up --build
- Open a new terminal window and run: node migrate.js and then node seed.js
- Open a new terminal window and run: node server.js
- Open a new terminal window inside the client folder and run: npm install
- After the dependencies are install run: npm start

## Usage
---
This project was for educational purposes to understand React and develop useHooks skills with a full-stack project. This project is a matching based game with a level selector and a search area section. The game has a level selector to allow the player to pick their difficulty rating; easy (8 pairs), beginner (16 pairs), medium (24 pairs), hard (36 pairs), and clinically insane (56 pairs).

## Screen Shots

- The Search area has a drop-down autofill feature that allows the user to quickly select the creature or continue to type it out.

![searchArea](https://live.staticflickr.com/65535/52851364442_b5dfd39fe8_w.jpg)

- The game will track the users total attempts as well as scores. When the score matches the number of pairs the game over message will appear. The user will have the ability to select to stay on the current difficulty or move up one level of difficulty.

![fullScreen](https://live.staticflickr.com/65535/52851364547_6e04e85612_b.jpg)

## Tech
---
- Front End: React
- Backend: Express.js
- Database: Postgresql
- Tools: Postman, Render, Docker, GitHub

## License
--- 
Images and creature are from the Wizards of Coast DnD Beyond
