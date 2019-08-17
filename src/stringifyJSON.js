// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'function' || obj === 'undefined') {
    return undefined;
  } else if (Array.isArray(obj)) {
    const result = [];

    for (let i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }

    return '[' + result + ']';
  } else if (typeof obj === 'object') {
    const result = [];

    for (let key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        continue;
      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }

    return '{' + result + '}';
  }
};
