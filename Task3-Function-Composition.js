/*
Task: Function Composition
-Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/

function square(num){
  return num * num
}

function double(num){
  return num * 2
}

function addNum(num){
  return num + 5
}

function composeNumber(num){
  return addNum(double(square(num)))
}

const result = composeNumber(5)
console.log(result);