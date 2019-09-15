//call npm install

const Person = require('./Person')//don't use import because node doesn't support it yet

const person1 = new Person('tony',19);
person1.greeting();