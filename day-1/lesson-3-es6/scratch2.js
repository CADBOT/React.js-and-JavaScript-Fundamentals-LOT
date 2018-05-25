let result = true && false
console.log(result)

var x
if (true) {
 x = 4
} else {
 x = 10
}

debugger
let bool = true
var y = (bool) ? 4 : 10
console.log(y)

let name = 'tim'
let lastName = 'johnson'
let job = 'cook'
let person = {
  name, 
  job,
  sayHello: function() {
    console.log('hello!')
  },
  sayHello2() {
    console.log('hello!')
  }
}

let prop = 'fullname'

let obj = {
  [prop + ' extra stuff']: 'tim johnson'
}
console.log('our object: ', obj)




