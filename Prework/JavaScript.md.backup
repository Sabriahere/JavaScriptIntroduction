# JavaScript

> This is a prework .md file that has been done based on the tutorial on this website: 
'https://labs.it-ninjas.ch/docs/03_frontend/03_javascript/'

- Can be used with `<script> <\script>` tag with referencing the used case within a html file, usually in the `head` or at the end of `body` part
- or in an external .js file while referencing it in the html file like this `<script src="mycode.js"></script>` in the `head` under the `src` tag

> JavaScript don't have strong types so a variable could be interpreted in various ways, need to pay attention to this

## Prerequisite Glossary
- `Node.js`: allows JavaScript to be executed outside of a browsers and has external packages that can be used
- `nvm`: Node Version manager
- `npm`: integrated package manager (Node Package Manager) in Node.js, allows to download libraries and modules form other developers
- `package.json`: npm uses this file to get information about the project and its dependencies,this includes meta data like name, version etc.
- `dependencies`: packages that are necessary for execution of the application
- `devDependencies`: packages necessary only for test, build process etc.
- `scripts`: can be used to write tests, compile code, start the server, etc.
- `packag-lock.json`: file which is generated automatically by npm after first time `npm install`, defines the exact versions of the downloaded packages, refrain from manually modifying this file

#### NPM Commands
- `npm init`: creates new package.json file to initialise a new project
- `npm install`: installs all dependencies that are written in the package.json file (can also write `npm i`)
- `npm install <packagename>`: installs a specific package and adds it to the package.json file (reverse with `uninstall`), installs them under `node_modules` package
- `npm update`: updates all dependencies to the newest version
- `npm run <scriptname>`: executes a script-section in the package.json file
- `npm i`: installs newest version of a package (ignoring the version in package.json, with those that start wit h `^` like ^12.2.12 )
- `npm ci`: installs newest version of a package (gets the version from package.json)

## Console log

`console.log('hello world');` 

- within a script block and see with F12 under the console window of the website
- write code directly in the console window with F12 

## Modify DOM objects

#### Example 1

HTML snippet:
```
<span id="likes-count"> 0 <\span>

```

JS snippet:
```
let span = document.getElementById('likes-count');
let likes = parseInt(span.textContent);
likes++;
span.textContent = likes;
```

Explanation:
- document: is an object that is ready for us in the browser, represents the DOM, we can access objects with this
- getElementByID(...): is a methode on document
- span.textContent: attribut of the element, the content of the element as a text
- let: assignement statement to a variable
- parseInt(): like the name says, doesnt need to be imported

#### Example 2

```

<body>
    <button type="button" onclick="onLikeClick()">
      <span id="likes-count">0</span>
    </button>
    <div id="message-div"></div>
    <div id="container"></div>
</body>

<script>
      function onLikeClick() {
        let span = document.getElementById("likes-count");
        let likes = parseInt(span.textContent);
        likes++;
        span.textContent = likes;

        // draw a thumb up for every like:
        const imgHtml = '<img src="Img/avatar.svg" alt="like">';
        let insertHtml = "";
        for (let i = 0; i < likes; i++) {
          insertHtml += imgHtml;
        }
        const messageDiv = document.querySelector("div#message-div");
        messageDiv.innerHTML = insertHtml;
        
        // add new elements
        var container = document.getElementById("container");
        var paragraph = document.createElement("p");
        paragraph.textContent = "Dies ist ein neuer Absatz.";
        container.appendChild(paragraph);
      }
</script>


```

Explanation:
- const: type of variable that cant be changed within the method
- document.querySelector(...): accepts a CSS-selector, could have used document.getElementById('message-div') too or `document.createElement` for new elements
- div#message-div: refers to the div class `<div id="message-div">`
- messageDiv.innerHTML: setting the html body part new with the saved up var
- container.appendChild(...): adds the created item to the div class


## Variables

- `var`: standard variable, mostly was used in pre-ES6 versions of JS
- `let`: variable can be reassigned a different value, if we dont assign it at init, then it's `undefined`, preferred now to var
- `const`: variable whose value cant be changed, will get TypeError else, they mist be assigned a value at init


#### Introduction
- String interpolation `${myVariable}`: variable to string 
- typeof operator: example `typeof variableName`, gives back the type of variable

String method:
- slice(start, end)
- substring(start, end)
- substr(start, Length)
> all three to extract certain part of a string
- trim(): removes whitespace from a string
- trimStart(): only removes whitespace from a string at the start of it
- padStart(4,"0"): pad a string with another string until it reaches a given length

## Conditional

2 different conditionals:
- if / else 
- switch 

Switch Expression (to assign depending on a variable "expression" here):
```
const variable = {
  "Bus":  1,
  "Auto": 2
}[expression]?? 0;
```

> ?? 0; is the default value

## Truthy & Falsy

meaning if a value is interpreted as true or false (in boolean sense)

false values:
- false
- nul
- undefined
- 0
- Not a Number NaN
- empyt string ''

all the other values are truthy


## Operator

- strict equivalent: `===`: compares the value also the datatype plays a role too
- equivalent: `==`: changes both values to a same type and compares them (implicit type conversion)
- not equal to `!==`: 
- double NOT `!!`: is used to change a value to a bool value, ensures that the expression is a bool one
- `||` or `&&` + `=` like `||=`, this is an evaluation of two expressions and an assignment to the variable
```
let falsyVariable = '';
let truthyVariable = 'Welt!';

falsyVariable ||= 'Hallo';
truthyVariable ||= 'Mensch';

console.log(falsyVariable); // 'Hallo'
console.log(truthyVariable); // 'Welt'

```
- `??=`: checks if the left side is null or undefined, if it is then the right side is evaluated and assigned to the variable, if not then nothing further happen

- `??`: returns the left value if it's not null or undefined, else returns the right expression 
> only null and undefined are evaluated as falsy values

- `?:`:ternary operator

logical operators can be either bitwise comparison or expression comparison

## Functions

Structure:
```
function functionName(parameter1,...){
}
```

- Default Parameters:
> put in `parameter = value) in the parameter list
```
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
```

- Default return value: undefined

### Arrow Functions (Lambda expression)

Structure:

(parameter1,...) => { Functionality }
(parameter1,...) => expression; //implicit return

### Function Expressions

- defines a function within an expression
- function without a name = `anonymous function` 
- common practice to use const as the type for this after ES6
- cannot be called before being defined

```
// Function-Expression:
const sum = function(number1, number2) {
     return number1 + number2;
}

// Das Gleiche mit der Arrow-Function-Schreibweise:
const sum2 = (a, b) => a + b;

console.log(sum(3, 5)); // 8
console.log(sum2(3, 5)); // 8
```

> has the concept of `this`, lambda expressions dont

- `Hoisting-Process`: concept where variables and function declarations are deplaced to the beginning, so they can be referenced to anywhere in the code later on

## Arrays

- `const array = [1,2,'wort', false];`

### Array functions
- `.length`
- `.push()` : adds at the end of the array
- `.pop()`: removes last element in array and returns it
- `.shift()`: removes first element in array and returns it
- `.unshift(obj1,obj2,...)`: adds at the start of the array and returns the length of the new array
- `.slice(startInclusiveIndex, endExclusiveIndex)`:  creates a copy of the array from start to end point and returns it
- `.splice(startIndex,numberOfElements,obj1,obj2,...)`: modifies the original array, replaces the numberOfElements from startIndex by replacing them with obj1, obj2, ...
- `.concat(array2,array3,...)`: returns new array with the concatination of multiple arrays
- `.indexOf(obj1)`: returns index of objext in array, if not found: -1 
- `.indexOf(obj1,startIndex)`: same as above but starts searching from startIndex
- `.map(function...)`
- `.filter(function...)`
- `.sort()` or `.sort(function...)`
- `.includes(obj)` or `.includes(obj, startIndex)`
- `.some(expression comparison)`: returns if at least 1 item succeeds the expression comparison
- `.find()`: returns first found element or else undefined
- `.reduce(function)`: reduces the array to one value by the functions standard

## Loops

- Iteration through array: For-loop, forEach, for of, for in, while, do while
- `continue`in a loop introduces the next iteration while skipping the rest of the block

Example for `forEach`:
- Lambda Expression can be used too 
- break/continue dont work here)
- less control over the loop compared to for
```
array.forEach(function(element) {
  console.log(element);
});
```

Example for `for...of`: 
- good for maps, sets, strings etc.
- usually easier to read than for
```
for (const element of array) {
  console.log(element);
}
```

Example for `for...in`:
```
for (let personProperty in person) {
    console.log(personProperty + ": " + person[personProperty]);
}
```

Example for `do...while`:
```
do {
  console.log(i);
  i++;
} while (i < 5);
```

## Objekte

Creation of objects in two different ways:

1. Objectliteral-syntax:
```
const person = {
    name: 'Max', 
    age: 20,
    isStudent: true
};
```
> it's possible to define functions within here too

2. Constructor-syntax:
```
const person = new Object();
person.name = 'Max';
person.age = 20;
person.isStudent = true;
```

Access/update an attribute of an object in two different:

1. point: `person.name`
2. brackets: `person['name']`

Add new attribute to an object:
1. point: `person.job = 'dev'`
2. brackets: `person['hobby'] = 'music`

## Maps & Sets

> Maps dont save duplicate of keys

`const map = new Map();`

- `.set(key,value)`: inserts new key-value-pair or updates the value for the key

> Sets don't have duplicate values

`const set = new Set();`

- `.add(value)`: adds new value into set

Similar methods:

- `.get(key)`: returns value for the key or undefined if it doesnt exist
- `.has(key)`: returns if the key exist
- `.delete(key)`: deletes the key-value-pair and returns true, else false if key doesnt exist
- `.clear()`
- `.size()`
- `.entries()`: returns all the key-value-pairs in a order they were added 
- `.keys()`: returns all key values
- `.values()`: returns all values

## JSON

- JSON = JavaScript Object Notation
- text format to exchange data
- usually used in webprogramming to exchange data between server and client
- only supports certain datatypes: numbers, booleans, null, arrays and objects (functions and undefined values are not supported)
- A JavaScript object is a collection of key-value-pairs
- A JSON object is a series of characters that contain these key-value-pairs in JSON-format

Example for a JSON object:
```
{
    "name": "Alice",
    "age": 25,
    "isStudent": true,
    "grades": [95, 89, 78]
}
```

### Conversion

```
const personExample = {
    name: 'Max',
    age: 20,
    isStudent: true,
};

const jsonStringExample = '{"name":"Max","age":20,"isStudent":true}';
```

- JavaScript -> JSON
> const jsonString = JSON.stringify(personExample);

- JSON -> JavaScript
> const person = JSON.parse(jsonStringExample);

### Spread operator ...

unzips an array or object-literal expression into a list of arguments
> can be used to copy arrays or objects too or give the function different parameters from an array or objects

Example : `const combinedArray = [...array1, ...array2];`

## Web Request

Example:

```
async function fetchJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random', { method: 'get' });
    
    if (!response.ok) {
      throw new Error(`Fehlerhafte Antwort. Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(error);
    // Hier müsste noch der Fehler behandelt werden und evtl. eine Nachricht dem User angezeigt werden.
    return null; // etwas zurückgebe, das auf einen Fehler hindeutet.
  }
}
```

Explanation:
- `async`: asynchronous operations dont block the rest of the code from executing while waiting for the operation to complete
- `await`:is used to pause the execution of the fetchJoke function until the 'fetch' call completes, needs the function to be async
- `fetch`: web request function for a get request in this case, returns a `Promise`
- `Promise`: is an object representing the eventual completion (or failure) of an async operation and its resulting value
- `if (!respone.ok)` : this part checks if the .ok attribute returned true, which means HTTP status code i sin the range 200-299
- `return await response.json();`: if the response is successful the function calls upon response.json() (needs await) to parse the response body as JSON object (the body is in ReadableStream mode per default), the parsed object is then the output for the fetchJoke function


Same Example but with `.then` and `.catch()`

```
function fetchJoke() {
  return fetch("https://api.chucknorris.io/jokes/random", { method: "get" })
    .then((response) => {
      if (!response.ok) throw Error("API not reachable");
      return response.json();
    })
    .then((data) => {
      return data.value;
    })
    .catch((error) => {
      console.error("Error in fetchJoke:", error);
      return null; // etwas zurückgebe, das auf einen Fehler hindeutet.
    });
}
```

> Fun fact in Angular there usually isnt a tr-catch block because with the usage of fetch() and checking the response for status-code is enough, Angular also has the global Exception-Handler who informs the user for errors

## Promises

- represents a value which will be available in the future
- often used for async operation like loading data form one server to the next or executing HTTP requests

A promise has three states:
- `pending`: promise hasnt been resolved yet or was rejected
- `fulfilled`: the async operation has been successfully resolved and the promise has contains the returned value
- `rejected`: the async operation has failed and the promise contains the error

#### Creation of a new promise:
```
const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve('success');
    } else {
        reject('error');
    }
});
```

#### then() & catch()

- then() is used to define what happens after the promise is successful
- then() can be used multiple times in a chain 
- catch() is used to define what happens after the promise fails/has error
- then() and catch() are mostly used together

```
const number = 10;
const promise = new Promise((resolve, reject) => {
    if (number > 0) {
        resolve('success');
    } else {
        reject('error');
    }
});

promise.then((result) => {
    console.log(result); // 'success'
}).catch((error) => {
    console.error(error); // 'error'
});
```

#### Promises as functions

> is done often to administrate async operations and callbacks, this ensures that that async operations are gone through sequentially and the code has a more clear structure this way

```
function promiseFunction(number) {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

async function callPromiseFunction() {
    const successResult = await promiseFunction(10);
    console.log(successResult);

    const errorResult = await promiseFunction(-5);
    console.log(errorResult);
}
```

if this function promiseFunction(...) is used in another function then you have to put the `await` key word in front of the call and put `async` in front of that method too

## Timeouts and Interval

to delay process an action delayed use: `setTimeout(callback, time)`

```
setTimeout(function(){
                console.log('Thanks for waiting :)');
            }, 5000);
```

- 1st argument is the action/function
- 2nd argument is the time in ms


to repeat a process use: `setInterval(...)`

```
setInterval(function(){
    console.log('hey!');
}, 1000);

```

Both methods return a number: this is the ID of the Timeout/Interval
> should remember this to close the interval again for e.g.
`clearInterval(...)` with this while inserting the ID into the brackets

## Prototyping and Classes

- JavaScript is a prototype-based programming language, this means that heritance and creation of objects are prototype based.

- A prototype is a predefined object, which is used as a template for new objects
- new created objects automatically inherit the attributes and methods of its prototype
- static methods: keyword: `static`before method, useful to define helper functions in a class which isnt bound to an instance of the class
> or for constructors
> class can inherit another class with the keyword `extend`

#### typeof vs instanceof
- `typeof`: to check the type of value of an object, classes return "function", returns a string with the type, should be used for primitive types
> `typeof null` returns object
- `instanceof`: is used to check if an instance inherits from a class, returns boolean, shouldnt be used for primitive types (they arent objects)
> you can combine and check both too tho like `numberVar instanceof Number || typeof numberVar === 'number'`


#### Object oriented vs. Prototype based programming language

- Classes vs. Prototypes: OOP relies on classes as blueprints for creating objects, whereas prototype-based programming uses existing objects as templates for creating new objects.
- Inheritance: OOP uses class-based inheritance, forming a hierarchy of classes. Prototype-based programming uses prototype chaining, where objects directly inherit from other objects.
- Object Creation: In OOP, objects are instances of classes. In prototype-based programming, objects are clones of other objects.

```
const personProto = {
  name: '',
  age: 0,

  speak: function() {
    console.log('Hello World!');
  }
}

const person1 = Object.create(personProto)
```

## ES6: 

### Variable declaration

In general: use `const` for a variable unless you want to change the variable in the same scope then use `let`, never use `var` unless you're working with a website that hasn't been updated since 2015 (it's more error prone, as it doesn't difference between global and function scope)
> for `const` an error is thrown if multiple instances of the same name exists within a scope

- JavaScript is dynamically typed language: types for variables are defined at runtime not compile one
- a variable can take multiple types during runtime -> some errors can only be seen at runtime

> there are modern version of JS that allow optional types

#### Scope

- Variables that were defined with `let` or `const` are only visible within a scope (can also mean if statements etc.)

There exist two types of scopes:
- `global scope`: variables declared outside of a function can be accessed from anywhere in the code
- `function scope`: variables only accessible and declared within a function

#### Destructuring Assignment

- Separating an array into multiple variables

`const [name, ...values] = ["ColumnName", 1, 2, 3, 4];`

- Separating an object into multiple variables
- 
``` 
const {a, b} = anotherObject;
const {a: one, d, b} = object;
```

### Import & Export

there are possibilities to import and export JavaScript-files and export

#### Import
two possibilities to import:
```
<script type="module">

    import {a, b, Person } from "./file.js";
    console.log(a, b, new Person('Monkey Puppet'));
    
</script>
```

and without script tag and `type = "module"` part:

`const {a, b, Person } = await import('./file.js');`

> here import is used like a function, it returns a Promise


#### Export

two different exports:
- `default`: a file can only have one default export, `export default`tag, when importing this the name doesn't have to be the same
- `named`: a file can have multiple named exports, `export` tag

Example 
```
export default class Person {
    name;
    constructor(name) { this.name = name;}
}
export function personFromJson(jsonString){
    const obj = JSON.parse(jsonString);
    return new Person(obj.name);
}
export function getNameOfPerson(person){
    return person.name;
};
```

```
import ClassForPerson, { personFromJson, getNameOfPerson } from "./person.js";

const person = personFromJson('{"name": "Mr. Incredible"}');
console.log(getNameOfPerson(person));
>>> Mr. Incredible

console.log(person instanceof ClassForPerson);
>>> true
```

### Optional Arguments in Methods and Constructors

can give Parameters in methods a default value

` constructor(name, age = undefined, gender = undefined, lovesJavaScript = true) { ... }`

- value, undefined value, pre-defined value
- you can skip undefined attributes altogether with mentioning the tag for the values you do want to assign

## JSDoc

- used to show description of functions, parameters etc. within other classes

Example:
```
/**
 * Diese Funktion leitet die Argumente dem Konstruktor der Klasse `Person` weiter.
 * @param {string} name                 Der Name der Person
 * @param {Object} namedArgs            (Eigentlich unnötig, wird aber als Label für Referenz auf die named Parameter benötigt)
 * @param {number} [namedArgs.age]      Alter
 * @param {string} [namedArgs.gender]   Geschlecht, darf irgend ein String sein.
 * @returns {Person}                    Ein Personen-Objekt mit den übergebenen Werten.
 */
function createPerson(name, { age = undefined, gender = undefined }) {
    return new Person(name, {
        age: age,
        gender: gender,
    })
}
```

#### possible Tags:
- `@param`: parameter
- `@returns`: return value
- `{number}`: type description, here it needs to be a number for e.g.
- `[namedArgs.gender]`: optional argument (nullable), else arguments shouldnt have undefined or null value
- [more Tags](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

#### showing Errors: 

> when values have the from typ

create a `jsconfig.json`file with following content:

```
{
    "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "baseUrl": ".",
    "checkJs": true,
    "importHelpers": true,
    "lib": [
      "DOM",
      "ES2021",
      "DOM.Iterable"
    ]
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
      "static/js/*"
  ]
}
```
 
 > the code assumes that the file .js file is in the folder “${workspaceFolder}/static/js/” 
 
 now VS Code will show the error if values would have wrong type.
 
 ## Advanced console.log(...)'s
 
 alternatives to `console.log(...)`
 
 different logs category:
 - `console.info(...)`: neutral
 - `console.warn(...)`: yellow/orange/green
 - `console.error(...)`: red
 - `console.debug(...)`: blue (only visible when all log levels are visible in the console)
 
more methods:
- `console.count("var1")`: counts the number of occurences of "var1"
- `console.dir(person)`: to log objects with their attributes and value
- `console.table([person1,person2])`: to log a table of objects (in rows and columns being attributes)
- `console.log('%cHello World, 'color: blue; ...')`: you can style the text
- `console.assert(...)`: when false values are returned e.g. by a return function
 
 ## Debugging
 
Debugging can help identify problems like type errors (especially for JavaScript), unexpected user input, network problems, inconsistent data or missing logic within the code.
 
Better not to use `console.log(...)` to debug because some logs can end up in production environment and sensitive data can get out this way.

#### Debugging possibilities

### Old School: 
`debugger;`: you can write this line in code and the browser will pause at that position
![](../mdPics/JavaScriptDebuggingOldSchool.png)
This always works with every Framework

### IntelliJ: 
[Read up more](https://labs.it-ninjas.ch/docs/web/javascript/24_debugging/)

### VSCode: 

#### Setting up Debugging:

- Click `Run and Debugg` and then again, chose web browser
- just press F5 (`.vscode/launch.json`file was made with a browser in mind to start automatically)

#### with LiveServer (Client-side)

- just click under `Run and Debug` window the option for `Live Server: Chrome` 

#### JavaScript files with NodeJs (Server-side)

> only works for JavaScript files!

- Chose the `Node.js Debugger ...` option under `Run and Debugg`
- You can see the output in the `Debug Console` (here you can test stuff like `browser.includes("Chrome")` too)

#### When to use which Debugger

- `Live Server: Chrome (Client-side)`: Use for debugging front-end code with a live server.
- `VSCode Debugger (without LiveServer)`: Use for debugging a single HTML file directly.
- `NodeJs Debugger (Server-side)`: Use for debugging backend Node.js code.

#### Breakpoints

##### Different types:

- `Breakpoints`: normal ones, stop the flow of the program at specific points in the code
- `Logpoints`: allow to insert a message into the console without disrupting the flow of the program
- `Conditional breakpoints`: allow a breakpoint to be set only under a condition
- `Exception breakpoints`: allows to interrupt the flow of the program where an exception happen
- `Hit count breakpoint`: when a condition is fulfilled it allows to make a pause in the code at a specific line, hit points are regarding the number of times this point has been reached

##### Left panel:

- `Watch`: can define variables to define during Debugging
- `Call Stack`: one can see which lines of code have been called up
- `Variables`: shows variables that are currently available


#### Debugging Actions

![](../mdPics/JavaScriptDebuggingActions.png)

- `F5`: continue/Pause
- `F10`: executes next line without inspecting
- `F11`: enters next method and follows each line
- `SHIFT + F11`: goes back to upper method
- `CNTRL + SHIFT+ F5`: restarts
- `SHIFT + F5`: stops

