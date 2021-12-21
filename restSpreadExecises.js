// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

const filterOutOdds = (...arguments) => arguments.filter(num => num %2 === 0);

//Write a function called findMin that
//accepts a variable number of arguments and returns the smallest argument.

const findMin = (...args) => Math.min(...args);


/**
* Write a function called mergeObjects that 
* accepts two objects and returns a new object which 
* contains all the keys and values of the first object and second object.
*/

const mergeObjects = (objA, objB) => ({...objA, ...objB});


/**
 * Write a function called doubleAndReturnArgs which accepts an 
 * array and a variable number of arguments. The function should return a 
 * new array with the original array values and all of additional arguments doubled.
 */

const doubleAndReturnArgs = (arr, ...otherArgs) => [...arr, ...otherArgs.map(arg => arg*2)];

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    //gen random number between 0 and the length of the array
    let num = Math.round(Math.random()*items.length);
    //remove the value and return
    return [...items.slice(0,num), ...items.slice(num+1, items.length)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => ([...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
