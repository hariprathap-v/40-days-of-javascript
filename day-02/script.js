console.log("day 02");
// ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

let person = "Hari";
let age = 22;
let isStudent = true;
let favoriteLanguage = "JavaScript";
const phoneNumber = 1234567890;

console.log("person: ", person);
console.log("age: ", age);
console.log("isStudent: ", isStudent);
console.log("favoriteLanguage: ", favoriteLanguage);
console.log("*******************************************");

//- ✅ Task 2: Print the values to the console.

person = "prathap";
age = 23;
isStudent = false;
console.log("after update", person);
console.log("after update", age);
console.log("after update", isStudent);
console.log("after update", favoriteLanguage);
console.log("*******************************************");
console.log("phoneNumber", phoneNumber);

//-✅ Task 3: Try reassigning values to let and const variables and observe errors.

// phoneNumber = 10987654321;
// console.log("phoneNumber", phoneNumber);

// - ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
let personData = {
  name: "hari",
  age: 22,
  isStudent: true,
  favoriteLanguages: ["HTML", "Css", "JavaScript"],
};
console.log("personData", personData);
console.log("person is favoriteLanguages", personData.favoriteLanguages);
