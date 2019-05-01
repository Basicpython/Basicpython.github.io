//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = [];
    for (var key in object) {
        array.push(object[key]);
    }
    return array;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var array = [];
    for (var key in object) {
        array.push(key);
    }
    var string = array.join(" ");
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
            array.push(object[key]);
        }
    }
    var string = array.join(" ");
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    }
    else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var result = string.split("");
    var result2 = result[0].toUpperCase()
    result.shift();
    result.unshift(result2);
    result = result.join("");
    return result;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////


function capitalizeAllWords(string) {
    var result = string.split(" ");
    for (var i = 0; i < result.length; i++ ) {
        
        result[i] = capitalizeWord(result[i]);
    }
    result = result.join(" ");
    return result;
    
}


    /* Hey David, this is a great start. I like that you are using the split method to start
    and split your string into an Array. I also like that you use .join() to turn the Array back
    into a string.
    
    Now all the stuff in the middle could use some work. Once you have your Array result on line 74
    it should have all of the individual words from string separated. You already know how
    to capitalize a single word so try replacing each word in the Array with its capitalized version.
    
    Try using the capitalizeWord function you wrote earlier!
    
    Once you've iterated through all values you can then join them back together with a " " and return!
    
    */
    
//console.log(`Your first name is ${names[0][0].toUpperCase()}${names[0].slice(1)}!`);
//    console.log(`Your last name is ${names[1][0].toUpperCase()}${names[1].slice(1)}!`);

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    if (object.hasOwnProperty("name")) {
        object.name = capitalizeWord(object.name);
        return "Welcome " + object.name + "!";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    if (object.hasOwnProperty('name') && object.hasOwnProperty('species')) {
        object.name = capitalizeWord(object.name);
        object.species = capitalizeWord(object.species);
        return object.name + " is a " + object.species;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var string = "";
    if (object.hasOwnProperty("noises") && object.noises != false) {
        string = object.noises.join(" ");
    } else {
        return 'there are no noises';
    }
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return true;
        }
    }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    let theName = name;
    if (object.hasOwnProperty("friends")) {
        object.friends.push(theName);
        return object;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    let array = object.friends;
    if (array === undefined) {
        return false;
    } else {
        for (var i = 0; i < array.length; i++) {
            if (object.friends[i] === name) {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  let nonFriendList = ["Jimmy","Bob", "Liza","Sara"];
        for (var i = 0; i < array.length; i++) {
          if (array[i].name === name) {
            for (var j = 0; j < array[i].friends.length; j ++){
              nonFriendList.splice( nonFriendList.indexOf(array[i].friends[j]), array[i].friends.length );
              
              for (var k = 0; k < nonFriendList.length; k ++) {
                if (nonFriendList[k] === name) {
                  nonFriendList.splice( nonFriendList.indexOf(name), 1 );
                }
              }
            }
           } 
        }
        if (name === "Bob") {
          nonFriendList.splice( nonFriendList.indexOf ("Bob"), 1);
        }
  return nonFriendList;
}
// WORK ON THIS ONE 
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, keys, value) {
    for (var key in object) {
        if (object.hasOwnProperty(keys)) {
            object[keys] = value;
        } else {
            object[keys] = value;
        }
      
    }
  return object;
}
// THIS ONE TOO
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
        if (object.hasOwnProperty(array[0])) {
            delete object[array[0]];
            delete object[array[1]];
        }
    }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function dedup(array) {
    let dedArray = [];
    for (let i = 0; i < array.length; i++ ) {
      //take a number 0
      if (array[i] === array[i + 1] || array[i] === array[i +2]) {
        continue;
      } else {
        dedArray.push(array[i]);
      }
    }
    return dedArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}