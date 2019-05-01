// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

const _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (value) {
    const type = typeof value;
    
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date) {
        return "function";
    }
    return type;
} 

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (array, number) {
    
    if (_.typeOf(array) !== "array") {
        return [];
    } else if ( _.typeOf(number) !== "number") {
        return array[0];
    } else if (number > array.length) {
        return array;
    } else {
        let firstArray = [];
        
        for (let i = 0; i < number; i++) {
            firstArray.push(array[i]);    
        }
        return firstArray;
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (array, number) {
    if (_.typeOf(array) !== "array") {
        return [];
    } else if ( number === undefined ) {
        return array[array.length - 1];
    } else if (number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else {
        let lastArray = [];
        
        for (let i = array.length; i >= number; number++) {
            lastArray.push(array[number - 1]);
        }
        return lastArray;
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array, value) {
    for (let i = 0; i < array.length; i ++) {
        if (array[i] === value) {
            return i;
        } 
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, fn) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
              fn(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            fn(collection[key], key, collection);
        }
    }
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(collection, fn) {
    var results = [];
    _.each(collection, function(value, location, collection) {
      if (fn(value, location, collection)) results.push(value);
    });
    return results;
  };

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function (collection, fn) {
    if (Array.isArray(collection)) {
        let mappedArray = [];
        for (let i = 0; i < collection.length; i++) {
              mappedArray.push(fn(collection[i], i, collection));
        }
        return mappedArray;
    } else {
        let mappedObject = [];
        for (let key in collection) {
            mappedObject.push(fn(collection[key], key, collection));
        }
        return mappedObject;
    }
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(obj, fn) {
  let results = obj;
    /* remember that fn must be called with the element, its index, and the array */
    results = _.filter(results, function(elt, loc, col) {
        if (fn(elt, loc, col) === false) {
            return true;
        }
    });

  return results;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function (collection, fn) {
    let array = [];
    let truthyArray = _.filter(collection, function(elt, loc, col) {
        if (fn(elt, loc, col) === true) {
            return true;
        }
    });
    
    let falsyArray = _.filter(collection, function(elt, loc, col) {
        if (fn(elt, loc, col) === false) {
            return true;
        }
    });
    
    array = [truthyArray, falsyArray];
    
    return array;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function (collection, fn) {
    if (_.typeOf(fn) !== "function") {
      let trueCount = 0;
        for (let j = 0; j < collection.length; j ++){
          if (collection[j]) {
            trueCount = trueCount + 1;
            if (trueCount === collection.length){
                return true;
            }
          }
        }
      return false;
    }
  
    if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i ++) {
            if (fn(collection[i], i, collection) === false) {
                return false;
            }
        }
    } else {
        for (let key in collection) {
            if (fn(collection[key], key, collection) === false) {
                return false;
            }
        }
    }
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (collection, fn) {
    let falseCounter = 0;
    /** 
    You will need to account for the situation in which fn is not a function
    */
    
    if (_.typeOf(fn) !== "function") {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++) {
                if (_.typeOf(collection[i]) === "null" || _.typeOf(collection[i]) === "NaN" || _.typeOf(collection[i]) === "undefined") {
                    falseCounter++;
                }   
            }
            if (falseCounter !== collection.length){
                return true;
            }
        } else {
            
            if (_.typeOf(collection) === "null" || _.typeOf(collection) === "NaN" || _.typeOf(collection) === "undefined") {
                    return false;
                }
            
            for (let key in collection) {
                if (_.typeOf(collection[key]) === "null" || _.typeOf(collection[key]) === "NaN" || _.typeOf(collection[key]) === "undefined") {
                    falseCounter++;
                }
            }
            if (falseCounter !== collection.length){
                return true;
            }
        }    
    } else {
        
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++) {
                if (fn(collection[i], i, collection)) { /** Make sure to call the function with i and collection as well*/
                    return true;
                }
            }
        } else {
            for (let key in collection) {
                if (fn(collection[key])) {
                    return true;
                }
            }
        }
        return false;
    }
};
//  _.some = function(obj, fn, collection) {
//     var keys = _.keys(obj),
//         length = (keys || obj).length;
//     for (var index = 0; index < length; index++) {
//       var currentKey = keys ? keys[index] : index;
//       if (fn(obj[currentKey], currentKey, obj)) return true;
//     }
//     return false;
//   };

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(obj, key) {
    
    /** Very close! 
        1) make sure you are mapping <array> which is an Array of Objects
        2) the callback function passed to _.map only needs one argument: the
            obj because the property you are accessing is the parameter
            <property> of pluck
        3) when returning the property you need to use bracket notation:
            return obj[property]
    
    */
    // it works but what is it?
    return _.map(obj, _.property(key));
  };

_.property = function(path) {
    if (!Array.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };
  
  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
