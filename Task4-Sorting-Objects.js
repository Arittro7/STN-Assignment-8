/*
Task: Sorting Objects
-Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/

const cars = [
  { make: "BMW", model: "X5", year: 2019 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2016 },
  { make: "Audi", model: "A4", year: 2021 },
  { make: "Hyundai", model: "Elantra", year: 2014 },
  { make: "Kia", model: "Sportage", year: 2018 }
];

function sortCarsByYear(carsInfo){
  return carsInfo.sort((a,b) => a.year - b.year)
  // return carsInfo.sort((a,b) => b.year - a.year) //descending
}

const sortedCars = sortCarsByYear(cars)
console.log(sortedCars);