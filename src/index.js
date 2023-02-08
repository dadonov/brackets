module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const openingElement = [];
  const elementPairs = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    openingElement.push(bracketsConfig[i][0]);
    elementPairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    let currentElement = str[i];
    if (openingElement.includes(currentElement)) {
      stack.push(currentElement);
    }
    let topStackElement = stack[stack.length - 1];
    if (elementPairs[currentElement] === topStackElement) {
      stack.pop();
    }
  }
  return stack.length === 0;
};

