/*
02.Task: Object Manipulation 
-Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/ 

const books = [
  {title: "Allah Loves", author: "Omar Suleiman", year: 2020},
  {title: "মারহাবা, জাভাস্ক্রিপ্টে মারো থাবা", author: "Jhankar Mahbub", year: 2025},
  {title: "Atomic Habits", author: "James Clear", year: 2018},
  {title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", year: 2020},
  {title: "Secrets of Divine Love", author: "A. Helwa", year: 2020}
]

function getBooksTitle(booksInfo){
  return booksInfo.map(book => book.title)
}

const titles = getBooksTitle(books)
console.log(titles);