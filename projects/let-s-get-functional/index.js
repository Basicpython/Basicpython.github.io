// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-basicpython');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, function(person) {
        return person.gender === "male";
    }).length;
};

var femaleCount = function(array) {
    return _.filter(array, function(person) {
        return person.gender === "female";
    }).length;
};

var oldestCustomer = function(array) {
    let elder = "";
    let oldAge = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].age > oldAge) {
            elder = array[i].name;
            oldAge = array[i].age;
        }
    }
    return elder;
};

var youngestCustomer = function(array) {
    let youngster = "";
    let youngAge = 999;
    for (let i = 0; i < array.length; i++) {
        if (array[i].age < youngAge) {
            youngster = array[i].name;
            youngAge = array[i].age;
        }
    }
    return youngster;
};

var averageBalance = function(array) {
    let average = 0;
    for (let j = 0; j < array.length; j++) {
        array[j].balance = array[j].balance.split("");
        array[j].balance = array[j].balance.shift();
        array[j].balance = array[j].balance.join("");
    }
    
    for (let i = 0; i < array.length; i++) {
        average = average + array[i].balance;
    }
    average = average / array.length;
    average.toString();
    return average;
};

var firstLetterCount = function(array, letter) {
    let letterCount = 0;
    
    for (let i = 0; i < array.length; i++) {
        array[i].name.split("");
        if (array[i].name[0].toLowerCase() === letter.toLowerCase()) {
            letterCount++;
        }
    }
    
    return letterCount;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let letterCount = 0;
    let friendArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            friendArray = array[i].friends;
        }
    }
    
    for (let i = 0; i < friendArray.length; i++) {
                if (friendArray[i].name[0].toLowerCase() === letter.toLowerCase()) {
                    letterCount++;
    }
    }
    
    return letterCount;
};

var friendsCount = function(array, name) {
    let theFriends = [];
        
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].friends.length; j++) {
                if (array[i].friends[j].name === name) {
                    theFriends.push(array[i].friends[j].name);
                }
            }
        }
        
        
    return theFriends;
};

var topThreeTags = function(array) {
    return [];
};

var genderCount = function(array) {
    let male = 0;
    let female = 0;
    let transgender = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].gender === "male") {
                male = male + 1;
            } else if (array[i].gender === "female") {
                female = female + 1;
            } else if (array[i].gender === "transgender") {
                transgender = transgender + 1;
            }
        }
    let objectiveGenders = {
      "male" : male,
      "female" : female,
      "transgender" : transgender
    };
    return objectiveGenders;
};

//npm start --prefix ./projects/let-s-get-functional

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
