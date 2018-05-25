let numbers = [4, 10, 5, 6, 7]
//let newNumbers = [4, 10, 6]

/*
let newNumbers = numbers.filter(function(number) {
  return number % 2 === 0
}).map(function(number) {
  return number * 10
})

let newNumbers = numbers.filter(number => 
  return number % 2 === 0
}).map(function(number) {
  return number * 10
})


let newNumbers = numbers
  .filter(number => number % 2 === 0)
  .map(number => number % 2 === 0)

console.log(newNumbers)

*/
let foods = ['pizza', 'sushi', 'rice']
//'pizzasushirice'
let finalString = foods.reduce(function(memo, food) {
  return memo + food // 'pizzasushirice'
})

let foodObjects = [
  {name: 'pizza', cost: 4}, 
  {name: 'sushi', cost: 8},
  {name: 'rice', cost: 1}
]

let finalString2 = foodObjects.reduce(function(memo, food) {
  return memo + food.name
}, '')
