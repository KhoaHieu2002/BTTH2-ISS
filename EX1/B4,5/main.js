const isValidJSON = obj => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"name":"Hieu",age:20}'));

console.log(isValidJSON(null));

//b5
// const fs = require('fs');
// const JSONToFile = (obj, filename) =>
//   fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
// JSONToFile({ test: 'is passed' }, 'testJsonFile');
