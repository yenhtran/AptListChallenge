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

/*
    Logic to interpret the response from the terminal
*/
process.stdin.on('data', function(data) {
    var newFriendsInput = data.toString().split(','),
        newFriends = newFriendsInput.map(function(name) {
        return name.trim();
    });

    newFriends.forEach(function(name) {
        fs.appendFile('data/input.txt', name + '\n', function(err) {
            if (err) throw err;
        });
    })

    readContent('input.txt', function(err, content) {
        var allEmployees = content.split('\n');

        allEmployees.splice(-1, 1);
        generateSummary(groupProcessor.makeGroups(allEmployees));
        process.exit()
    });
});

/*
    Generate a template to display groups
*/
function generateSummary(groups) {
    groups.forEach(function(group, index) {
        process.stdout.write(`Group ${index + 1}` + '\n');
        process.stdout.write(`=====\n`);
        group.forEach(function(name) {
            process.stdout.write(`${name}` + '\n');
        });
        process.stdout.write(`\n`);
    });
}

/*
    Reads contents from input.txt file
*/
function readContent(fileName, callback) {
    fs.readFile('data/input.txt', 'utf8', function(err, content) {
        if (err) return console.log(err);
        callback(null, content);
    });
}

/*
    Displays directions to the terminal
*/
function beginProgram(i) {
    process.stdout.write(`Please enter the name of your new friend!\n`);
    process.stdout.write("   >   ");
}

beginProgram(0);
