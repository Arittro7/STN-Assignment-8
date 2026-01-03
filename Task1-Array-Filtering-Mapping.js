// Task: Array Filtering and Mapping
// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const person =[
  {name: "Izhaan", age:1, gender: "male"},
  {name: "Farina", age:12, gender: "female"},
  {name: "Arnob", age:19, gender: "male"},
  {name: "Fatima", age:20, gender: "female"},
  {name: "Arpita", age:25, gender: "female"},
]

function getMalePersons(arr){
  return arr
    .filter(person => person.gender !== "female")
    .map(person => person.name)
}

const result =getMalePersons(person)
console.log(result);

/*
  `test using vscode terminal 
  node Task1-Array-Filtering-Mapping.js
*/ 
