'use strict';

var chalk = require('chalk'),
    clear = require('clear'),
    figlet = require('figlet'),
    fs = require('fs'),
    readline = require('readline'),
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


process.stdin.on('data', function(data) {
	fs.appendFile('data/input.txt', data, function(err) {
		if (err) throw err;
		process.exit()
	});
});

function beginProgram(i) {
    process.stdout.write(`Please enter the name of your new friend!\n`);
    process.stdout.write("   >   ");
}

console.log(groupProcessor.makeGroups(entireCompany));
beginProgram(0);
