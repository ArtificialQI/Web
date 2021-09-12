//Асинхронность Event Loop
//const timeout = setTimeout(() => { console.log('after_timeout') }, 2500)

//clearTimeout(timeout)

//const interval = setInterval(() => { console.log('after_timeout') }, 1000)

/* const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
} */
//delay(() => {console.log('after 2 seconds')}, 2000)

const dealy = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => { setTimeout(() => {
        //resolve()
        reject('smth goes wrong')
    }, wait) })
    return promise
}

dealy(2500)
.then(() => {console.log('after 2 seconds')})
.catch(err => {console.log('Error: ', err)})
.finally(() => console.log('finally'))

const getData = () => new Promise(resolve => resolve([1, 1, 3, 5, 8, 13, 21]))

getData().then(data => console.log(data))

async function asyncExpl() {
    try {
    await dealy(3000)
    const data = await getData()
    console.log('Data', data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finally')
    }
}
asyncExpl()