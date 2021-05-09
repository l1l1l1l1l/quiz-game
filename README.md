# quiz-game

## Description

Final assignment of Haaga-Helia's React Native mobile programming course.

## Built with
* [Expo](https://expo.io/)
* [React Native](https://reactnative.dev/)
* [SQLite Database](https://www.sqlite.org/index.html)
* [Open TriviaDB](https://opentdb.com/)

# Getting Started

## Requirements

* npm

Instructions: [NPM](https://www.npmjs.com/get-npm)

* Expo CLI
```sh
npm install -g expo-cli
```

## Installation

### `Clone the repository`
   ```sh
   git clone https://github.com/l1l1l1l1l/quiz-game
   ```
   
## Available Scripts

In the project directory, you can run:

### `npm install`

Installs required packages to run the app.

### `expo start`


Runs the app in the development mode.\
The page will reload if you make edits.



# Usage

App fetches 1 question and 4 answer choices from Open Trivia DB.

User can choose 1 answer and the app tells you whether it was correct or not.

Correct answer gives +1 point and wrong answer gives -1 points. The game ends when you have 5 incorrect answers.

There is also a scoreboard where the user can keep track of the scores. These scores are saved in SQLite database.


 
