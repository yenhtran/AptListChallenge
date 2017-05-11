'use strict'

/*
	Shuffles all names in a list
 */
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

/*
	Breaks up a long list of names into 4-person subGroups ('chunks');
 */
function breakIntoChunks(names) {
    var newArray = [];

    for (var i = 0; i < names.length; i += 4) {
        newArray.push(names.slice(i, i + 4))
    }
    return newArray
}

/*
	Logic to redistribute the lastSubGroup (if lastSubGroup is less than 2 people), to groups that have no more than 5 people.
 */
function validateGroup(groups) {
	if (groups[groups.length-1].length <= 2) {

    	var lastSubGroup = groups[groups.length-1];
    	var newArray = [];

    	for (var i = 0; i < lastSubGroup.length; i++) {

    		if (groups[i].length <= 4) {
    			groups[i].push(lastSubGroup[i]);
    		}
    	}
    	groups.splice(-1, 1);
    	return groups;
    } else {
    	return groups;
    }
}

/*
	Kicks off the group distribution functionality. Returns an error if the entireCompany size is less than 3 people.
 */
exports.makeGroups = function(entireCompany) {

    if (entireCompany.length < 3) return new Error(['not enough people']);

    var shuffledList = shuffle(entireCompany),
    		groupedList = breakIntoChunks(shuffledList);

		return validateGroup(groupedList);
}