const readlineSync = require('readline-sync');

let userInput = readlineSync.question("Enter a string: ");  //prompts the user for a string input

let index = readlineSync.questionInt("Enter an index to find the character: ");  //prompts the user for an index and converts the string to a number

let usersCharacter = userInput[index];  //uses bracket notation to assign the user supplied index to the variable 'usersCharacter'

console.log(`The character at index ${index} is: '${usersCharacter}'`)  //prints the string character at the index of 'usersCharacter'