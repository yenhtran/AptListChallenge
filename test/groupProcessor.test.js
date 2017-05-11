'use strict';

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    rewire = require('rewire'),
    groupProcessor = require('../lib/groupProcessor.js');

describe('groupProcessor', function() {
    var groupProcessorRewire = rewire('../lib/groupProcessor.js'),
        entireCompany;

    beforeEach(function() {
        entireCompany = ['Happy', 'Dopey', 'Grumpy', 'Sneezy', 'Bashful', 'Sleepy', 'Doc', 'Snow', 'Thor'];
    });

    describe('#shuffle', function() {
        var private_shuffle = groupProcessorRewire.__get__('shuffle'),
            shuffledList;

        it('should return an array with names in a different order', function() {
            shuffledList = private_shuffle(entireCompany);

            expect(shuffledList).to.not.equal(['Happy', 'Dopey', 'Grumpy', 'Sneezy', 'Bashful', 'Sleepy', 'Doc', 'Snow', 'Thor']);
        });
    });

    describe('#breakIntoChunks', function() {
    		var private_breakIntoChunks = groupProcessorRewire.__get__('breakIntoChunks'),
            brokenUpList;

        it('should return a list of names broken into chunks of 4 names per chunk.', function() {
        		brokenUpList = private_breakIntoChunks(entireCompany);

            expect(brokenUpList[0].length).to.equal(4);
            expect(brokenUpList[1].length).to.equal(4);
        });
    });

    describe('#validateGroup', function() {
    		var private_validateGroup = groupProcessorRewire.__get__('validateGroup'),
            brokenUpList = [['Happy','Dopey','Grumpy','Sneezy'], ['Bashful', 'Sleepy','Doc','Snow'],['Thor','Loki']],
            validatedGroup = private_validateGroup(brokenUpList);

        it('should not have groups with less than 3 names per group.', function() {
        		expect(validatedGroup.length).be.equal(2);
            expect(validatedGroup[0].length).be.equal(5);
            expect(validatedGroup[1].length).be.equal(5);
        });
        it('should not have groups with more than 5 names per group', function() {
        		expect(validatedGroup[0].length).to.be.at.most(5);
            expect(validatedGroup[1].length).to.be.at.most(5);
        });
    });

    describe('#makeGroups', function() {
    		var entireStartUp = ['Grumpy', 'Sleepy'];

        it('should return an error if a group that is less than 3 names is submitted.', function() {
        	var sadLunchGroup = groupProcessor.makeGroups(entireStartUp);

            expect(sadLunchGroup).to.be.an('error');
        });

        it('should return a shuffled group that has no more than 5 people, and no less than 3 people per group', function() {
        	 	var perfectLunchGroups = groupProcessor.makeGroups(entireCompany);

            expect(perfectLunchGroups[0].length).to.be.at.most(5);
            expect(perfectLunchGroups[perfectLunchGroups.length -1].length).to.be.at.least(3);
        });
    });
});
