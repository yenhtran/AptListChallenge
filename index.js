'use strict';

var chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet');

/*
    Creates a nice banner in the terminal
*/
clear();
console.log(
    chalk.yellow(
        figlet.textSync('Family Friday!', { horizontalLayout: 'full' })
    )
);

var entireCompany = ['Happy', 'Dopey', 'Grumpy', 'Sneezy', 'Bashful', 'Sleepy', 'Doc', 'Snow', 'Super Woman', 'Batman'];


function shuffle(array) {
    var shuffledNames = [],
        num = entireCompany.length,
        i;

    while (num) {
        i = Math.floor(Math.random() * entireCompany.length);

        if (i in entireCompany) {
            shuffledNames.push(entireCompany[i]);
            delete entireCompany[i];
            num--;
        }
    }
    return shuffledNames;
}

function makeGroups(entireCompany) {
    console.log('making groups!');

    //If the length of the entireCompany is less than 3, return error
    //Take array and shuffle the names
    //Break the list of names into chunks of 4 people per group
    //Validate groups
    //	if last group size is less than 3
    //		take everyone in that last group and pop each one off...
    //		(Loop through the brokenUpList)
    //				(if the length of the current chunk is less than 4)
    //						...add 1 person to each of the other groups
    //

    if (entireCompany.length < 3) return new Error(['not enough people']);
}

console.log(makeGroups(entireCompany));
