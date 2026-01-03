/*06.Task: Array Reduction
-Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
*/

const numbers =[5,10,15,20,25,30]

function sumOfEvenNumbers(arr) {
  return arr.reduce((sum, num) =>{
    if (num % 2 === 0){
      return sum + num
    }
    return sum
  }, 0)
}

console.log(sumOfEvenNumbers(numbers));