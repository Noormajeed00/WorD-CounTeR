#! /usr/bin/env node 
// This line is called a shebang, it tells the OS to run it with nodejs
//import the 'inquirer' module, which is a command line interfaces for Node.js
import inquirer from "inquirer";
//Declare a constant `answers` and assign it to the result of inquirer.prompt function 
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
//Print the array of woeds to the console
console.log(words);
