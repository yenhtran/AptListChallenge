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