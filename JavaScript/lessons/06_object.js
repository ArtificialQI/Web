//Объекты
const person = {
    name: 'Stas',
    age: 23,
    isProgrammer: true,
    languages: ['ru', 'en'],
    'complex key': 'complex_value',
    [Date.now()]: 'computed_key',
    greet() {
        console.log('greet_from_person')
    },
    info() {
        console.info('info about person: ', this.name)
    }
}
console.log(person["complex key"])
console.log(person)

person.age++
console.log(person)
    person.languages.push('by')
delete person["complex key"]

const name = person.name
const age = person.age
const languges = person.languages
// Destructorization
const {name: PersonName, age: PersonAge, languages} = person
console.log(PersonName, PersonAge, languages)

for(let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key: ', key)
        console.log('value: ', person[key])
    }
}
const keys = Object.keys(person)
console.log(keys)
keys.forEach((key) => {
    console.log('key: ', key)
    console.log('value: ', person[key])
})

//Context
person.info()

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    KeysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log(`${key}: ${this[key]}`)
        })
    },
    WithParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('---start---')
        }
        Object.keys(this).forEach((key, idx, array) => {
            console.log(`${key}: ${this[key]}`)
            if (between && idx !== array.length - 1) {
                console.log('------')
            }
        })
        if (bottom) {
            console.log('---end---')
        }
    }
}
const bound = logger.keys.bind(person)
bound()

logger.keys.call(person)

logger.KeysAndValues.call(person)

logger.WithParams.call(person, true, true, true) 

logger.WithParams.apply(person, [true, true, true]) 