//Async

console.log('first event')

console.log('second event')

function nexTout() {
    console.log('next 2 sec')
}

window.setTimeout(function() {
    console.log('after 5 sec')
}, 5000)

window.setTimeout(nexTout, 2000)

console.log('end')