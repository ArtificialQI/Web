//Context
function hello () {
    console.log('Hello', this)
}
const person = {
    name: 'Lucile',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`name is ${this.name}`)
        console.log(`age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
const lena = {
    name: 'Elena',
    age: 23
}

person.logInfo.bind(lena, 'Frontend', '8-321-12-23')()
person.logInfo.call(lena, 'Frontend', '8-321-12-23')
person.logInfo.apply(lena, ['Frontend', '8-321-12-23'])

const arr = [5, 4, 3, 2, 1]

/* function multBy(arr, number) {
    return arr.map(item => item * number)
} */
//console.log(multBy(arr, 5))

Array.prototype.multBy = function(number) {
    return this.map(item => item * number)
}

console.log(arr.multBy(2))