// Переменные
const firstName = 'Stanislav'
let age = 23
const isProgrammer = true

console.log(age)
//Мутирование
let title = 'title'
console.log('Name human: ' + firstName + 'Age is: ' + age)
const lastName = prompt('enter Last Name')
alert(firstName +' '+ lastName)

//Операторы
const curretnYear = 2021
const birthYear = 1998

const Age = curretnYear - birthYear
console.log(Age)

const a = 10
const b = 5

console.log(typeof isProgrammer)
console.log(typeof a)
console.log(null)

function isprime(number) {
    return number + 1;
}

console.log(isprime(10))
//Массивы
const arr = [3, 4, 5, 6, 7, 8]
console.log(arr)
 for (i of arr)
    console.log(i)
//Объекты

const person  = {
    firstField: 'Stanislav',
    secondField: 'Goyda',
    year: '1998',
    greet: function() {console.log('hello')}
}

console.log(person)
console.log(person.firstField)
console.log(person['secondField'])
const key = 'year'
console.log(person[key])