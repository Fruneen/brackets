module.exports = function check(str, bracketsConfig) {
  let flag = true;
  let array = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] === bracketsConfig[j][0]) {
          if (array.indexOf(bracketsConfig[j][0]) !== -1 && bracketsConfig[j][0] === bracketsConfig[j][1]) {
            array.splice(array.length - 1, 1);
            continue;
          }
          array.push(str[i]);
        } 
        if (str[i] === bracketsConfig[j][1]) {
          if (array.length !== 0 && array[array.length - 1] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
            array.splice(array.length - 1, 1);
          } else if (array.length === 0 && array[array.length - 1] !== bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
            flag = false;
          }
        } 
    }
  }
  if (array.length > 0) flag = false;
  return flag;
}