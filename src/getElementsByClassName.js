// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var returnArray = [];
  var nodeCheck = function(node) {
    if(node.className !== undefined) {
      if(node.className.includes(className)) {
        returnArray.push(node)
      }
    }
    if(node.hasChildNodes()){
      var children = node.childNodes
      children.forEach(function(child) {
        nodeCheck(child)
      })
    }
  }
  nodeCheck(document.body)
  //console.log("Result: \n", returnArray)
  return returnArray
};

// error 
// function is outputting twice
// fix this

