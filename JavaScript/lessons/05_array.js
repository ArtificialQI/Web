//Arrays
let fib = [1, 2, 3, 5, 8, 13]
fib.push(21) // to end
fib.unshift(1) // to begin
console.log(fib)
console.log(fib.shift()) // delete first item
console.log(fib.pop()) // deleta last item
console.log(fib.reverse())

const text = 'string_to_reverse'
text.toUpperCase();
const reverse_text = text.split('').reverse().join('')
console.log(reverse_text)

fib = [1, 2, 3, 5, 8, 13]
console.log(fib.indexOf(5))

const people = [
    {name: 'first', value: 1},
    {name: 'seocnd', value: 2},
    {name: 'third', value: 3} 
]
const idx  = people.findIndex(function(person){ return person.value === 2 })
console.log(people[idx].name)

const person = people.find(person => person.value === 2)

for (const person of people) {
    if (person.value === 2) {
        finded_person = person
        break
    }
}

console.log(fib.includes(-5))

const pow2 = num => num**2
const sqrt = num => Math.sqrt(num)
const sqrFib = fib.map(pow2) 
console.log(sqrFib)

const newFib = sqrFib.filter(num => num > 20)
console.log(newFib)

const AllValue = people.filter(person => person.value > 2).reduce((acc, person) => { 
    return acc
}, 0) 
