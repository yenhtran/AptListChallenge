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

		readContent('input.txt', function(err, content) {
			var allEmployees = content.split('\n');

			allEmployees.splice(-1, 1);

			var groups = groupProcessor.makeGroups(allEmployees);

			groups.forEach(function(group, index){
				process.stdout.write(`Group ${index + 1}` + '\n');
				process.stdout.write(`=====\n`);
				group.forEach(function(name) {
					process.stdout.write(`${name}` + '\n');
				});
				process.stdout.write(`\n`);
			});

		});
		// process.exit()
	});
});



function readContent(fileName, callback) {
	fs.readFile('data/input.txt', 'utf8', function(err, content) {
		if(err) return console.log(err);
		callback(null, content);
	});
}

function beginProgram(i) {
    process.stdout.write(`Please enter the name of your new friend!\n`);
    process.stdout.write("   >   ");
}

beginProgram(0);
