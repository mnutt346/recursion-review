// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var returnArray = [];
  //var startNode = document.body
  //console.log(startNode);
  var nodeCheck = function(node) {
    if(node.className === className) {
      returnArray.push(node)
    }
    if(node.hasChildNodes()){
      //console.log("has kids")
      var children = node.childNodes
      for(var i = 0; i < children.length; i++) {
        //console.log('the ' + i + ' run')
        nodeCheck(children[i])

      }
    }
  }
  nodeCheck(document.body)
  //console.log('returnArray:')
  console.log(returnArray)
  return returnArray
};

// error 
// function is outputting twice
// fix this

