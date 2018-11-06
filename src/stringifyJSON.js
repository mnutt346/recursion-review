// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === "number") {
    return obj.toString();
  } else if(typeof obj === "boolean") {
    if(obj === true) {
    return "true";
    } else {
      return "false";
    } 
  } else if(obj === null) {
    return "null";
  } else if(typeof obj === "string"){
    return '"' + obj + '"';
  } else if(Array.isArray(obj)) {
    if(obj.length <= 0) {
      return '[]';
    } else {
      var array = [];
      for(var i = 0; i < obj.length; i++) {
        if(typeof obj[i] === 'string') {
          array.push('"' + obj[i] + '"');
        } else if(typeof obj[i] === 'number') {
          array.push(obj[i]);
        } else if(Array.isArray(obj[i])) {
          array = array.concat(stringifyJSON(obj[i]));
        }
      }
      return '[' + array + ']';
    }
  }
};
