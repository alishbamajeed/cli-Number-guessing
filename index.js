#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) user inputfor guessing number
//3) cpmpare user input withcomputer genetrated number and show result
const randomNumber = 27;
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number:",
    },
]);
if (answers.userGussedNumber === randomNumber) {
    console.log("Congrulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
