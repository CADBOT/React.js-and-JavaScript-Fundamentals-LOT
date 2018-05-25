let array = [1, 5, 10, 12]
let array2 = [...array]
console.log(array)
console.log(array2)
console.log(array === array2)

let array3 = array
console.log(array)
console.log(array3)
console.log(array === array3)

let a1 = [5, 7]
let a2 = [10, 11]
let a3 = [...a1, 10, ...a2]
console.log(a3)
