function log(x) {
  console.log(x)
}
let numbers = [1, 5, 10]

let newNumbers1 = numbers.map(function(number) {
  return number * 2
})

// vanilla es6 arrow
let newNumbers2 = numbers.map((number) => {
  return number * 2
});

// es6 arrow with dropped parens
let newNumbers3 = numbers
  .map(number => {
  return number * 2
  })
  .filter()
  .map()

// omit the return
let newNumbers4 = numbers.map((number) => number * 2)

let newNumbers5 = numbers.map(number => number * 2)

;[1, 2, 3, 4].forEach((number, index, array) => {
  console.log(index)
  console.log(number)
})




