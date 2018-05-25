let numbers = [7, 4, 2]
/*
let x = numbers[0]
let y = numbers[1]
let z = numbers[2]
*/
let [x,,y] = numbers
console.log(x, y)
/*
let temp = x
x = y
y = x
*/
;[x, y] = [y, x]
console.log(x, y)

let obj = {
  time: '11:16',
  training: 'react'
}
/*
let time = obj.time
let training = obj.training
*/
let time
let training
console.log(time)
console.log(training)



