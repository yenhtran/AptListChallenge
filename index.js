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

var entireCompany = ['Happy', 'Dopey', 'Grumpy', 'Sneezy', 'Bashful', 'Sleepy', 'Doc', 'Snow', 'Super Woman', 'Batman', 'Superman', 'Thor', 'Loki'];


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

function breakIntoChunks(names) {
    var newArray = [];

    for (var i = 0; i < names.length; i += 4) {
        newArray.push(names.slice(i, i + 4))
    }
    return newArray
}

function makeGroups(entireCompany) {
    console.log('making groups!');

    //Validate groups
    //	if last group size is less than 3
    //		take everyone in that last group and pop each one off...
    //		(Loop through the brokenUpList)
    //				(if the length of the current chunk is less than 4)
    //						...add 1 person to each of the other groups
    //

    if (entireCompany.length < 3) return new Error(['not enough people']);
    var shuffledList = shuffle(entireCompany);
    var groupedList = breakIntoChunks(shuffledList);

    if (groupedList[groupedList.length-1].length <= 2) {

    	var lastSubGroup = groupedList[groupedList.length-1];
    	var newArray = [];

    	for (var i = 0; i < lastSubGroup.length; i++) {
    		groupedList[i].push(lastSubGroup[i]);
    	}

    	groupedList.splice(-1, 1);
    	return groupedList;
    }
}

console.log(makeGroups(entireCompany));
