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
  }else if(Array.isArray(obj)) {
    if(obj.length <= 0) {
      return '[]';
    } else {
      var toStr = [];
      obj.forEach(function (elem) {
        toStr = toStr.push(elem);
      });
      toStr = toStr.join('');
      return '[' + toStr + ']';
    }
  }
};
