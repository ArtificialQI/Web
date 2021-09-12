//Closure

function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}
const calc = createCalcFunction(42)
calc()

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}
const addOne = createIncrementor(1)
console.log(addOne(10))

const addTen = createIncrementor(10)

console.log(addTen(10))

function UrlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = UrlGenerator('com')
console.log(comUrl('Google'))
console.log(comUrl('netflix'))

const ruUrl = UrlGenerator('ru')
console.log(ruUrl('yandex'))
console.log(ruUrl('hh'))

function LogPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const personOne = {name: 'Mikhael', age: 22, job: 'Front'}
const personTwo = {name: 'Elena', age: 19, job: 'SMM'}

function bind(person, func) {
    return func.bind(person)
}

bind(personOne, LogPerson)()
bind(personTwo, LogPerson)()

function myBind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}
myBind(personOne, LogPerson)()
myBind(personTwo, LogPerson)()