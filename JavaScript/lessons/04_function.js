//Функции
//Function Declaration
function Log(name) {return console.log('hi', name)}
Log('Max')
//Function Expression
const log = function log(name) { return console.log('bye', name)}
log('Xam')

console.dir(log)

//lambda
let counter = 0
const interval = setInterval(function() {
    if (counter === 5) 
        clearInterval(interval)   
    else 
        console.log(++counter)   
}, 100)

//Arrow function
const arrow = () => {
    console.log('arrow function')
}
const arrow_2 = x => console.log(`greetings ${x}`)
arrow_2('Master')

const power = num => num ** 2
console.log(power(5))

// Default params
const sum = (x, y = x**x) => x + y
console.log(sum (41, 1))

function sumAll(...all) {
    res = 0
    for (let item of all)
        res += item
    console.log(res)
    }
sumAll(1, 2, 3, 4, 5)

//Замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Stasik')
console.log(logWithLastName('Komissarov'))
console.log(logWithLastName('Ivanov'))
