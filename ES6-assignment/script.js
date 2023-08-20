
/////////////////////////////////////////////////////
/////////  TEMPLATE STRINGS  ///////////////////////

//////////  Answer # 1  /////////////////
const Person = (name, age) => {
  return `Hello, ${name}! You are ${age} years old.`;
};

const personName = "Alishba";
const personAge = 21;

const Message = Person(personName, personAge);
console.log(Message); // Output: Hello, Alishba! You are 21 years old

//////////////////////////
/////  Answer # 2  //////
const calculateAverageOfSum = numbers => {
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;

  return `Sum: ${sum}, Average: ${average}`;
};

const numberArray = [10, 20, 30, 40, 50];

const answer = calculateAverageOfSum(numberArray);
console.log(answer);

////////////////////////
/////  Answer # 3  /////
const hTMLElement = (tagName, text) => {
  return `<${tagName}>${text}</${tagName}>`;
};

const tagName = "p";
const text = "Welcom, to our website!";

const myElements = hTMLElement(tagName, text);
console.log(myElements);

/////////////////////////
/////  Answer # 4  /////
const getProductInfo = product => {
  const { name, price, quantity } = product;
  return `Product: ${product}, Price: $${price}, Quantity: ${quantity}`;
};

const productObject = {
  product: "Widget",
  price: 24.99,
  quantity: 10
};

const productInfo = getProductInfo(productObject);
console.log(productInfo);

///////////////////////////
//////  Answer # 5  ///////
const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
};

const inputDate = new Date(); // You can pass your desired date here

const formattedDate = formatDate(inputDate);
console.log(formattedDate);

  ////////////////////////
  //////  DESTRUCCTING  ///////////////////////////////////////
  /////  Answer # 1  ///////////
  
  const sum = ([num1, num2]) => {
    return num1 + num2;
  };
  
  const numbers = [5, 7];
  const results = sum(numbers);
  console.log(results); // Output will be 12
  
  ////////  Answer # 2  /////////
  const personInfo = ({ name, age, occupation }) => {
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  };
  
  const person = {
    name: "Sara",
    age: 26,
    occupation: "Teacher"
  };
  
  const infoString = personInfo(person);
  console.log(infoString); // Output will be "Name: Sara, Age: 26, Occupation: Teacher"
  
  ///////  Answer # 3  //////////
  const findHighestScorer = (people) => {
    const [firstPerson, ...restPeople] = people;
    
    let highestScore = firstPerson.score;
    let highestScorerName = firstPerson.name;
    
    restPeople.forEach(person => {
      if (person.score > highestScore) {
        highestScore = person.score;
        highestScorerName = person.name;
      }
    });
    
    return highestScorerName;
  };
  
  const people = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
  ];
  
  const highestScorer = findHighestScorer(people);
  console.log(highestScorer); // Output will be "Bob"
  
  /////  Answer # 4
  const getInitials = ({ firstName, middleName = '', lastName }) => {
    const firstInitial = firstName[0].toUpperCase();
    const middleInitial = middleName[0].toUpperCase();
    const lastInitial = lastName[0].toUpperCase();
    
    return `${firstInitial}${middleInitial}${lastInitial}`;
  };
  
  const persons = {
    firstName: "Alishba",
    middleName: "Irfan",
    lastName: "Ghori"
  };
  
  const initials = getInitials(persons);
  console.log(initials); // Output will be "JMD"
  
  ////////// Answer # 5  ///////////
  const firstLast = (array) => ({
    first: array[0],
    last: array[array.length - 1],
  });
  
  const array = ["welcome", "to", "the", "website"];
  const result2 = firstLast(array);
  console.log(result2);
  
  
  //////////////////////////////////////
  ///////  DEFAULT, REST & SPREAD /////////
  
  ////  Answer # 1  /////////////
  const sumNumbers = (a = 1, b = 5) => {
    return a + b;
  };
  
  const reSult = sumNumbers(15, 2);
  console.log(reSult); // Output: 17
  
  const resulT = sumNumbers();
  console.log(resulT); // Output: 6
  
  
  ////  Answer # 2  ///////
  const allArgs = (...args) => { //allArg: arguments
    return args;
  };
  
  const result0 = allArgs(0,1, 2, 3, 4, 5, 6, 7, 8);
  console.log(result0); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
  
  /////  Answer # 3  /////
  const maxArray = (arr) => {
    return Math.max(...arr);
  };
  
  const arr = [1, 5, 7, 14, 18, 20];
  const resuLt = maxArray(arr);
  console.log(resuLt); // Output: 20
  
  ////  Answer # 4  ////
  const concatenateArrays = (array1, array2) => {
    return [...array1, ...array2];
  };
  
  const array1 = ["Alishba"];
  const array2 = [1, 2, 3];
  const resultAfterConcatenate = concatenateArrays(array1, array2);
  console.log(resultAfterConcatenate); // ['Alishba', 1, 2, 3 ]
  
  /////  Answer # 5  /////
  const addId = (person) => {
    const id = Math.random(5);
    return {
      ...person,
      id,
    };
  };
  
  const person1 = {
    name: "Alishba",
    age: 20,
    occupation: "Web Developer",
  };
  const newPerson = addId(person1);
  console.log(newPerson);
  
  //////////////////////////////////////
  /////////  ARROW FUNCTIONS  ///////
  
  ///////  Answer # 1  ////////
  const arrayElements = [1, 2, 3, 4, 5];
  
  arrayElements.forEach((element) => {
    console.log(element * element);
  });
  
  ////  Answer # 2  /////
  // Shorthand syntax of Arrow Function
  // const str = "Welcome Alishba!"
  // const StringLength = string => string.length;
  // console.log(str.length); // Output: 16 
  
  // Longhand syntax of Arrow Function
  const getStringLength = (string) => {
    return string.length;
  };
  
  const string = "Welcome, Alishba!";
  
  console.log(getStringLength(string)); // 14
  
  //////  Answer # 3  ///////
  // const multiply = (a, b) => a * b;
  
  // console.log(multiply(2, 3)); // Output: 6
  
  
  const multiple = (a, b) => {
    return a * b;
  };
  console.log(multiple(5, 3)); // Output: 15
  
  /////  Answer # 4  /////
  const average = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    const length = array.length;
    return sum / length;
  };
  
  console.log(average([1, 3, 5, 7, 9])); // 5
  
  ////  Answer # 5  /////
  // const greet = (name) => `Hello, ${name}!`;
  
  // console.log(greet("Alishba")); // Hello, Alishba!
  
  
  
  // const username = prompt("Enter your name:")
  // const greet = (name) => `Hello, ${username}!`;
  
  // alert(greet(username)); // Hello, username!
  
  ////  Answer # 6  ////
  const randomNumber = () => Math.random();
  
  console.log(randomNumber()); // answer will come in 0 and 1 with decimal e.g: 0.6467.... 
  
  ///////////////////////////////////////////////////
  //////  PROMISES  ///////
  
  /////  Answer # 1  //////
  function squareAfterOneSecond(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number * number);
      }, 1000);
    });
  }
  
  
  const number = 5;
  const promiSe = squareAfterOneSecond(number);
  
  promiSe.then((result) => {
    console.log(result); // Output: 25
  });
  
  //////  Answer # 2  ///////
  function allResolve(promises) {
    return new Promise((resolve, reject) => {
      const results = [];
  
      for (const promise of promises) {
        promise.then((value) => {
          results.push(value);
        }, (error) => {
          reject(error);
        });
      }
  
      resolve(results);
    });
  }
  
  const promises = [
    squareAfterOneSecond(5),
    squareAfterOneSecond(10),
    squareAfterOneSecond(15),
  ];
  
  const promise = allResolve(promises);
  
  promise.then((results) => {
    console.log(results); // [25, 100, 225]
  });
  
  ////  Answer # 3  /////
  
  
  
  /////  Answer # 4  //////
  
  
  
  // ////  Answer # 5  ////
  // function timeout(promise, timeout) {
  //   return new Promise((resolve, reject) => {
  //     const timer = setTimeout(() => {
  //       reject(new Error("Promise did not resolve within timeout"));
  //     }, timeout);
  
  //     try {
  //       return promise.then(resolve, reject);
  //     } finally {
  //       clearTimeout(timer);
  //     }
  //   });
  // }
  
  // const Promise = ((resolve, reject) => {
    
  // }) = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("The promise resolved!");
  //   }, 2000);
  // });
  
  // const timedOutPromise = timeout(Promise, 1000);
  
  // timedOutPromise.catch((error) => {
  //   console.log(error); // "Promise did not resolve within timeout"
  // });
  
  /////  Answer # 6  /////
  // const counter = (value) => {
  //   console.log(value);
  // };
  
  // const count = new PromisE((resolve, reject) => {
  //   resolve("Start Counting");
  // });
  
  // count.then((value) => {
  //   counter(value);
  //   return 1;
  // }).then((value) => {
  //   counter(value);
  //   return 2;
  // }).then((value) => {
  //   counter(value);
  //   return 3;
  // }).then((value) => {
  //   counter(value);
  // });
  
  
  
//////////////////////////////////////////////////////////
///////  MAP  //////////////
                            ////// modify the map code////////
  /////  Answer # 1  //////
  function squareMap(numbers) {
    const map = new Map();
    for (const number of numbers) {
      map.set(number, number ** 2);
    }
    return map;
  }
  
  const number1 = [1, 2, 3, 4, 5];
  const squareMapped = squareMap(number1);
  console.log(squareMapped); // Map(1 => 1, 2 => 4, 3 => 9, 4 => 16, 5 => 25)
  
  /////  Answer # 2  //////
 
//   function peopleMap(peopleData) {
//     const map = new Map();
//     for (const person of peopleData) {
//       map.set(person.name, person.age);
//     }
//     return map;
//   }
  
// const peopleData = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Peter", age: 40 }];
// const peopleMap = peopleMap(peopleData);
// console.log(peopleMap); // Map(John => 30, Jane => 25, Peter => 40)

////////

function createNameAgeMap(personData) {
  const map = new Map();
  for (const person of personData) {
    map.set(person.name, person.age);
  }
  return map;
}

const individuals = [
  { name: "dua", age: 60 },
  { name: "muhammad", age: 45 },
  { name: "komal", age: 20 }
];

const nameAgeMap = createNameAgeMap(individuals);
console.log(nameAgeMap); // Map(John => 30, Jane => 25, Peter => 40)

//////  Answer # 3  //////

function containsKey(map, key) {
  return map.has(key);
}

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

const containsKey1 = containsKey(map, "key1"); // true
const containsKey2 = containsKey(map, "key3"); // false

/////  Answer # 4  /////
function filterMap(map, callback) {
  const newMap = new Map();
  for (const [key, value] of map) {
    if (callback(key, value)) {
      newMap.set(key, value);
    }
  }
  return newMap;
}

const maps = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

const filteredMap = filterMap(map, (key, value) => {
  return value.length > 5;
});

console.log(filteredMap); // Map(key2 => value2)

/////  Answer # 5  /////
function mergeMaps(map1, map2) {
  const newMap = new Map();
  for (const [key, value] of map1) {
    newMap.set(key, value);
  }
  for (const [key, value] of map2) {
    if (newMap.has(key)) {
      newMap.set(key, value);
    } else {
      newMap.set(key, value);
    }
  }
  return newMap;
}

const map1 = new Map();
map1.set("key1", "value1");
map1.set("key2", "value2");

const map2 = new Map();
map2.set("key1", "value3");
map2.set("key3", "value4");

const mergedMap = mergeMaps(map1, map2);

console.log(mergedMap); // Map(key1 => value3, key2 => value2, key3 => value4)

////////////////////////////////////////////////////////////////////////////////
////////////  CLASSES  /////////////

////  Answer # 1  ////
class Person_1 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // A method to return a string greeting the person
  sayHello() {
    return `Hello, ${this.firstname} ${this.lastname}!`;
  }
}

// Create a variable for a friend named Alishba Irfan
const friend1 = new Person_1("Alishba", "Irfan");

// Create a variable for another friend named Muhammad Ali
const friend2 = new Person_1("Muhammad", "Ali");

// Print a greeting for each friend
console.log(friend1.sayHello());
console.log(friend2.sayHello()); // Output: Hello, Alishba Irfan! // Hello, Muhammad Irfan!

/////  Answer # 2  ///////

///// wrong code  /////////////

// class Person1 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // A method to return the person's introduction
//   getIntroduction() {
//     return `My name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// // Create a new person named zulkifl who is 10 years old
// const person3 = new Person("zulkifl", 10);

// // Print the person's introduction
// console.log(person.getIntroduction());


class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // A method to return the person's introduction
  getIntroduction() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create a new person named zulkifl who is 10 years old
const person3 = new Person1("zulkifl", 10);

// Print the person's introduction
console.log(person3.getIntroduction());

/////  Answer # 3  /////
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // A method to return the area of the rectangle
  getArea() {
    return this.width * this.height;
  }

  // A method to return the perimeter of the rectangle
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create a new rectangle with a width of 10 and a height of 5
const rectangle = new Rectangle(10, 5);

// Print the area and perimeter of the rectangle
console.log(rectangle.getArea()); // 50
console.log(rectangle.getPerimeter()); // 30

////  Answer # 4  /////
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // A method to return the diameter of the circle
  getDiameter() {
    return 2 * this.radius;
  }

  // A method to return the circumference of the circle
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  // A method to return the area of the circle
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Create a new circle with a radius of 5
const circle = new Circle(5);

// Print the diameter, circumference and area of the circle
console.log(circle.getDiameter()); // 10
console.log(circle.getCircumference()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483

//// Answer # 5  ////
class Boy {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // A method to return the person's introduction
  getIntroduction() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Boy {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  // A method to override the person's introduction to include the course
  getIntroduction() {
    return super.getIntroduction() + ` I am studying ${this.course}.`;
  }
}

// Create a new student named Alishba who is 20 years old and is studying Web Development
const student = new Student("Alishba", 20, "Web Development");

// Print the student's introduction
console.log(student.getIntroduction());

// ////  Answer # 6  ////

class Rectangular {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // A method to return the area of the rectangle
  getArea() {
    return this.width * this.height;
  }

  // A method to return the perimeter of the rectangle
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangular {
  constructor(side) {
    super(side, side); // The super keyword refers to the base class' constructor
  }

  // A method to override the area of the rectangle to use the side
  getArea() {
    return this.width * this.width; // Use width instead of side
  }

  // A method to override the perimeter of the rectangle to use the side
  getPerimeter() {
    return 4 * this.width; // Use width instead of side
  }
}

// Create a new square with a side of 8
const square = new Square(8);

// Print the square's area and perimeter
console.log(square.getArea()); // 64
console.log(square.getPerimeter()); // 32

////////////////////////////////////////////////////////////
////////  HOISTING  ////////

////  Answer # 1  ////
function printVarValue() {
  var x = 10;
  console.log(x);
}

printVarValue(); // Output: 10


var x = 10;

function printVarValue() {
  console.log(x); // This works
}

printVarValue();

console.log(x); // This will throw a ReferenceError

/////  Answer # 2  //////
function printLetValue() {
  let y = 20;
  console.log(y);
}

printLetValue(); // Output: undefined

let y = 20;

function printLetValue() {
  console.log(); // This works Output: 20
}

printLetValue();

console.log(y); // This will throw a ReferenceError

//////  Answer # 3  ///////
function printConstValue() {
  const m = 5;
  console.log(m);
}

printConstValue(); // Output: 5

const m = 5;

function printConstValue() {
  console.log(x); // This works
}

printConstValue();

x = 20; // This will throw an error
console.log(x); // This will still be 10

////  Answer # 4  /////
function printUndeclaredVariableValue() {
  var x = 10;
  y = x; // This will assign the value of x to y, even though x is not declared yet
  console.log(); // This will print the value of y, which is 10
}

printUndeclaredVariableValue(x); // Output: 10

function printUndeclaredVariableValue() {
  y = x; // This will throw a ReferenceError
}

printUndeclaredVariableValue();

////  Answer # 5  /////
function outerFunction() {
  function innerFunction() {
    console.log("This is the inner function");
  }

  innerFunction();
}

outerFunction(); // Output: This is the inner function

////////////////////////////////////////////////////////////////////
//////////  THIS KEYWORD  //////

/////  Answer # 1  /////
const girl = {
  name: "Maheen",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

girl.greet(); // Output: Hello, Maheen!

// /////  Answer # 2  //////
// function car(brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// }

// car.prototype.accelerate = function(value) {
//   this.speed += value;
// };

// car.prototype.printSpeed = function() {
//   console.log(this.speed);
// };

// const myCar = new Car("Tesla", 0);
// myCar.accelerate(60);
// myCar.printSpeed(); // Output: 60

/////  Answer # 3  /////
const calculator = {
  value: 5,
  add(number) {
    this.value += number;
  },
  subtract(number) {
    this.value -= number;
  },
  multiply(number) {
    this.value *= number;
  },
  printValue() {
    console.log(this.value);
  },
};

calculator.add(10);
calculator.subtract(5);
calculator.multiply(2);
calculator.printValue(); // Output: 15

//////  Answer # 4  ///////
const book = {
  title: "Good Girl Guide To Murder",
  author: "Holly Jackson",
  pages: 400,
};

book.printInfo = function() {
  console.log(`Title: ${this.title}`);
  console.log(`Author: ${this.author}`);
  console.log(`Pages: ${this.pages}`);
};

book.printInfo(); // Output:
// Title: Good Girl Guide To Murder
// Author: Holly Jackson
// Pages: 400

/////  Answer # 5  //////
function Man (name, age) {
  this.name = name;
  this.age = age;
}

Man.prototype.introduce = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Man("John", 30);
john.introduce(); // Output:
// Hello, my name is John and I am 30 years old.

//////  Answer # 6  /////
// const counter = {
//   count: 0,
//   increment() {
//     this.count++;
//   },
//   reset() {
//     this.count = 0;
//   },
// };

// counter.increment(); // count is now 1
// counter.increment(); // count is now 2
// counter.reset(); // count is now 0

/////  Answer # 7  //////
const product = {
  name: "iPhone 13 Pro",
  price: 999,
  discount: 10,
};

product.calculateDiscountedPrice = function() {
  const discountedPrice = this.price - (this.price * this.discount / 100);
  return discountedPrice;
};

const discountedPrice = product.calculateDiscountedPrice();
console.log(discountedPrice); // Output: 899.1

/////// Answer # 8  ////////
const game = {
  play() {
    console.log("Let's play!");
  },
};

game.play(); // Output: Let's play!

////////////////////////////////////////////////////////////
///////  FOR OF LOOP  /////////

/////  Answer # 1  ///////
const fruits = ["apple", "banana", "cherry", "grape", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

////  Answer # 2  ////
const message = "Hello, world!";

for (const character of message) {
  console.log(character);
}

/////  Answer # 3  //// 
// const Person15 = {
//   name: "John Doe",
//   age: 30,
//   country: "United States"
// };

// for (const property of Person15) {
//   console.log(property, Person15[property]);
// }

// ////  Answer # 4  /////
// const colors = new Set(["red", "green", "blue", "yellow", "purple"]);

// for (const color of colors) {
//   console.log(color);
// }

////  Answer # 5 //////
const number_1 = [];

for (let i = 0; i < 10; i++) {
  number_1.push(i + 1);
}

console.log(number_1); // Output the array to the console

for (let i = 0; i < numbers.length; i++) {
  console.log(number_1[i]); // Use a for loop to iterate through the array and output each value to the console
}

for (const number of number_1) {
  console.log(number); // Use a for...of loop to iterate through the array and output each value to the console
}

//////////////////////////////////////////////////////////////
////////  FOR IN LOOP  //////////////

//// Answer # 1  ////
// Create a simple object with three items in it.
const object = {
  name: "Zulkifl",
  age: 10,
  favoriteColor: "green"
};

// Using the for in loop, get the properties' names and values from the object
// and output them into the console.
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Create an array containing the same three items.
const arrays = [
  "Bin",
  13,
  "Vardan"
];

// Using either the for loop or the for in loop, output the values from the array into the console.
for (const item of arrays) {
  console.log(item);
}


////  Answer # 2  /////
const pro = {
  name: 'John Doe',
  age: 30,
  country: 'USA'
};

for (const property in pro) {
  if (pro.hasOwnProperty(property)) {
    console.log(property);
  }
}

/////  Answer # 3  /////
//.......
const number6 = [1, 2, 3, 4, 5];

for (const index in number6) {
  console.log(index);
}
//.......
const numberScore = [1, 2, 3, 4, 5];

for (const number of number6) {
  console.log(number);
}

////  Answer # 4  ////
const messages = "Hello, World!";

for (const char of messages) {
  console.log(char);
}

////  Answer # 5  ////
const scores = new Map([
  ['Alice', 95],
  ['Bob', 87],
  ['Carol', 78]
]);

for (const [name, score] of scores) {
  console.log(`Name: ${name}, Score: ${score}`);
}

////  Answer # 6  /////
const car = {
  brand: 'Toyota',
  model: 'Corola',
  year: 2022
};

for (const property in car) {
  if (car.hasOwnProperty(property)) {
    const value = car[property];
    console.log(value);
  }
}

//////////////////////////////////////////////////////////////////////////
/////////  ASYNC/AWAIT  ///////////

/////  Answer # 1  ///////
const delayedGreeting = async (name) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Hello, ${name}!`);
};

delayedGreeting('Sara');

////  Answer # 2  ////
const fetchData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = { message: "Data has been fetched." };
      resolve(data);
    }, 3000);
  });
};

(async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();

////  Answer # 3  ////
const fetchUsers = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
      ];
      resolve(users);
    }, 4000);
  });
};

(async () => {
  try {
    const userList = await fetchUsers();
    console.log(userList);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
})();

/////  Answer # 4  /////
const dataFetch = async (id) => {
  try {
    const response = await fetch(`https://api.example.com/data/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for id ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Usage
(async () => {
  try {
    const id = 123; // Replace with the desired ID
    const result = await fetchData(id);
    console.log(result);
  } catch (error) {
    // Handle error
  }
})();

/////  Answer # 5  /////
const fetcedData = async (id) => {
  return new Promise(resolve => {
    setTimeout(async () => {
      try {
        const response = await fetch(`https://api.example.com/data/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for id ${id}`);
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        reject(error);
      }
    }, 5000);
  });
};

// Usage
(async () => {
  try {
    const id = 123; // Replace with the desired ID
    const result = await fetchData(id);
    console.log(result);
  } catch (error) {
    // Handle error
  }
})();

////  Answer # 6  /////
let globalCounter = 0;

const timeoutPromise = (value) => {
  return new Promise(resolve => {
    setTimeout(() => {
      globalCounter++;
      resolve({ counter: globalCounter, argument: value });
    }, 1000);
  });
};

const asyncFunction = async (value) => {
  const result = await timeoutPromise(value);
  console.log(`Global counter: ${result.counter}, Argument value: ${result.argument}`);
  return result;
};

(async () => {
  for (let i = 1; i <= 10; i++) {
    const result = await asyncFunction(i);
    console.log("Returned result:", result);
  }
 })();

//////////////////////////////////////////////////////////
////  CLOSURES (WITH SCOPE & ITS BENEFITS’S)  ////////

////  Answer # 1  /////
const counter = () => {
  let count = 0; // This variable is captured by the closure

  const incrementAndLog = () => {
    count++;
    console.log(count);
  };

  return incrementAndLog; // Return the inner function
};

const incrementCounter = counter();

incrementCounter(); // Output: 1
incrementCounter(); // Output: 2
incrementCounter(); // Output: 3

////  Answer # 2  ////
const createMultiplier = (multiplier) => {
  return (number) => {
    return number * multiplier;
  };
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10 (2 * 5)
console.log(triple(5)); // Output: 15 (3 * 5)

////  Answer # 3  /////
const secretMessage = (message) => {
  return (additionalMessage) => {
    console.log(`Secret message: ${message} - ${additionalMessage}`);
  };
};

const revealSecret = secretMessage("Confidential information");

revealSecret("For your eyes only"); // Output: Secret message: Confidential information - For your eyes only

////  Answer # 4  /////
const calculate = (num1, num2) => {
  return {
    add: () => {
      return num1 + num2;
    },
    multiply: () => {
      return num1 * num2;
    }
  };
};

const calculators = calculate(5, 3);

console.log(calculators.add());      // Output: 8 (5 + 3)
console.log(calculators.multiply()); // Output: 15 (5 * 3)

//////////////////////// FINISH /////////////////////////////////




