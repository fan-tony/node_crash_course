const path = require('path');//core module so don't need the ./

//gets Base file name
console.log(__filename);//full file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//get file extension
console.log(path.extname(__filename));

// create object that holds information regarding the path
console.log(path.parse(__filename));

//Concatenate paths

console.log(path.join(__dirname,'test','hello.html'));