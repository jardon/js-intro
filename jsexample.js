//Ways to declare variables
// let x = 5 
// var y = 7 

//The main difference is the scope difference, 
//while let can be only available inside the scope it's declared, like in for loop, 
//var can be accessed outside the loop for example.
//DONT USE VAR

//Trying to change constant throws error
//const z = 6
//z = 5


//To check variable type
//x = 'hello'
//console.log(typeof(x))


//console.log() => debugging

//--------------------------------------------------------------------------------------------------
// Conditionals and ternary
// If/else 
// 		Same as Java. If else/if black. ||, &&, >=, <=, <, >, ==, ===, !==, !=
// let name = "Nate"
// let age = 15
// if (name == 'Nate' && age == 15) {
//     console.log("From if")
// } else {
//     console.log("From else")
// }

//Ternary Expression:
//let result = condition ? value1 : value2;

// let age = 21
// let str = (age > 18) ? 'allowed' : 'notAllowed';
// console.log(str)

// let age = 101
 
// let message = (age < 3) ? 'Hi, baby!' :
//  (age < 18) ? 'Hello!' :
//  (age < 100) ? 'Greetings!' :
//  'What an unusual age!'
 
// console.log(age)

//---------------------------------------------------------------------------------------------
//Loops
//Same syntax as Java for both while and for loops
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// let x = 0
// while (x < 10) {
//     console.log(x)
//     x++;
// }
//---------------------------------------------------------------------------------------------
//Functions and Arrow functions
// function name(parameters) {
//     ...body...
// }
// function sum2(a, b) {
//     return a + b
// }
// console.log(sum2(5,6))


// CallBacks
// function confirm() {
//     return "Agreement confirmed"
// }

// function cart(agreement, confirm, decline) {
//     if (agreement) {
//         return confirm()
//     } else {
//         return decline()
//     }
// }

// function decline() {
//     return "Agreement declined"
// }

// console.log(cart(true, confirm, decline))




// Arrow Functions
//let func = (arg1, arg2, ...argN) => expression
// let sum2 = (a, b) => {
//     return a + b
// }
// console.log(sum2(5,6))

//---------------------------------------------------------------------------------------------
// Arrays
// let arr = [1,2,3,4]
// arr.pop() // removing element at the end
// arr.push(5) //adding element at the end
// console.log(arr)


//arr.slice([start], [end])


// let arr = [1, 2, 3, 4]
//arr.splice(index, deleteCount, elem1, ..., elemN)
//returns the array of removed elements
// console.log(arr.splice(1,1))
// console.log(arr)


// let arr = [1,2,3,4]
// arr.forEach(function(item, index, array) {
//     // ... do something with item
//  });
// arr.forEach((item) => {
//     console.log(item)
// })
//Nothing is returned


// let arr = ["Bilbo", "Gandalf", "Nazgul"]
// let result = arr.map(function(item, index, array) {
//     // returns the new value instead of item
//   });
// mappedArr = arr.map((item) => {
//     return item.length
// })
// console.log(mappedArr)
// Something is returned


//There are other array methods such as filter, include, check em out
//----------------------------------------------------------------------------------------------
//Classes, objects, and JSON


// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }



// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayName() {
//         console.log(this.name)
//     }
//     sayAge() {
//         console.log(this.age)
//     }
// }
// let user = new User("George", 19)
// user.sayName()


//objects/JSON
// let user = {
//     name: 'George',
//     age: 19,
//     profession: 'student'
// }
// user.birthday = '12-20-2000' add key/value
// user.name = "George Ye"  edit name
// console.log(user)
// delete user.age   delete key/value
// console.log(user.name) accessing JSON value
// console.log(user['name'])  accessing JSON value


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
