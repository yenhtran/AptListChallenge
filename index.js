'use strict';

var chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet'),
    groupProcessor = require('./lib/groupProcessor');

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

console.log(groupProcessor.makeGroups(entireCompany));
