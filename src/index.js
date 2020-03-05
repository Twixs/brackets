module.exports = function check(str, bracketsConfig) {
  let array = [];
  const checkBracketOpen = (bracket) => {
    return !!bracketsConfig.find(elem => elem[0] === bracket);
  }
  const checkBracketCLosed = (bracket, prevOpen) => {
    const pair = bracketsConfig.find(elem => elem[1] === bracket);
    return pair[0] !== prevOpen;
  }
  for (let i = 0; i < str.length; i++) {
    if (checkBracketOpen(str[i])) {
      const pair = bracketsConfig.find(elem => elem[0] === str[i]);
      if (str[i] === pair[0] && str[i] === pair[1] && str[i] === array[array.length-1]) {
        array.pop();
      } else {
        array.push(str[i]);
      }
    } else {
      if (checkBracketCLosed(str[i], array[array.length-1])) {
        return false;
      }
      array.pop();
    }
  }
  return array.length > 0 ? false : true;
}