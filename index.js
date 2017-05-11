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
        num = array.length,
        i;

    while (num) {
        i = Math.floor(Math.random() * array.length);

        if (i in array) {
            shuffledNames.push(array[i]);
            delete array[i];
            num--;
        }
    }
    return shuffledNames;
}

function makeGroups(entireCompany) {
    console.log('making groups!');

    //Break the list of names into chunks of 4 people per group
    //Validate groups
    //	if last group size is less than 3
    //		take everyone in that last group and pop each one off...
    //		(Loop through the brokenUpList)
    //				(if the length of the current chunk is less than 4)
    //						...add 1 person to each of the other groups
    //

    if (entireCompany.length < 3) return new Error(['not enough people']);
    var shuffledList = shuffle(entireCompany);

    var newArray = [];

    for (var i = 0; i < shuffledList.length; i +=4) {
    	newArray.push(shuffledList.slice(i, i+4))
    }
    return newArray
}

console.log(makeGroups(entireCompany));




















