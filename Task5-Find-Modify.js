/*
Task: Find and Modify
-Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

const person =[
  {name: "Izhaan", age:1},
  {name: "Farina", age:12},
  {name: "Duha", age:19},
  {name: "Fatima", age:20},
  {name: "Arpita", age:25}
]

function updateAge(arr, personName, newAge){
  const person = arr.find(p => p.name === personName)
  if(person){
    person.age = newAge
  }
  return arr
}

const modifiedArray = updateAge(person, "Duha", 14)
console.log(modifiedArray); 