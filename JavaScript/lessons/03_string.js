//String
const name = 'Tass'
const age = 23

function getAge() {
    return age
}
//const output = 'hi my name is ' + name + ' & my age is' + age // is bad
const output = `hi my name is ${name} and my age is ${getAge() < 20 ? 'A' : 'B'}`
console.log(output)

const out = `
<div>This is div</div>
<p>This is p</p>
`
console.log(out)

const someName = 'name'
console.log(someName.toUpperCase())
console.log(someName.toLocaleLowerCase())
console.log(someName.charAt(2))
console.log(someName.indexOf('am'))
console.log(someName.startsWith('a'))
console.log(someName.endsWith('e'))
console.log(someName.repeat(5))
const password = '   pass   '
console.log(someName.trim())
console.log(someName.trimLeft())
console.log(someName.trimRight())

function LogPerson(arr, name, h) {
    console.log(arr, name, age)
    return `${arr[0]}${name}${arr[1]}${age}${arr[2]}`
}
const out_ = LogPerson`Name: ${name}, Age: ${age}`
console.log(out_)