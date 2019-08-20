// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  const result = [];
  let nodeElement = document.body;

  const getNodes = function(className, node) {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }

    if (node.hasChildNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        getNodes(className, node.childNodes[i]);
      }
    }
  };

  getNodes(className, nodeElement);

  return result;
};
