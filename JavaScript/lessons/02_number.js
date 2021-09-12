//Numer
const int = 5;
const float = 5.5;
const pow = 10e5;
//console.log(Math.pow(2, 53) - 1)
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log(Number.isNaN(2 / undefined))
console.log(Number.isFinite(Infinity))

const strInt = '40'
const strFloat = '40.42'
console.log(Number(strInt) + 2)
console.log(parseInt(strInt) + 2)
console.log(+strInt + 2)
console.log(parseFloat(strFloat) + 2)

console.log(0.4 + 0.2) //0.6
console .log(+(0.4 + 0.2).toFixed(1))

//BigInt
console.log(90071992547409919999999999999999n - 9007199254740991999999999999999n)
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n)

//Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(2))
console.log('MAX:', Math.max(Math.PI, Math.E, Math.sqrt(2)))
console.log('MIN:', Math.min(Math.PI, Math.E, Math.sqrt(2)))
console.log('CEIL: ', Math.ceil(Math.PI))
console.log('FLOOR: ', Math.floor(Math.E))

console.log('ROUND:', Math.round(Math.E))
console.log('TRUNC:', Math.trunc(Math.E))
//console.log(Math.random())

function GetRandomBetween(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min)
}
console.log(GetRandomBetween(5, 10))