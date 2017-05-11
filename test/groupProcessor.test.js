'use strict';

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    rewire = require('rewire'),
    groupProcessor = require('../lib/groupProcessor.js');

describe('groupProcessor', function() {
	describe('#shuffle', function() {
		it('should return an array with names in a different order');
	});

	describe('#breakIntoChunks', function() {
		it('should return a list of names broken into chunks of 4 names per chunk.');
	});

	describe('#validateGroup', function() {
		it('should not have groups with less than 3 names per group.');
		it('should not have groups with more than 5 names per group');
	});

	describe('#makeGroups', function() {
		it('should return an error if a group that is less than 3 names is submitted.');
		it('should return a shuffled group that has no more than 5 people, and no less than 3 people per group');
	});
});