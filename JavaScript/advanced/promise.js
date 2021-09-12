//Promise
console.log('Request data...')

/* setTimeout(() => {console.log('Preparing data')
    const backendData = {
        server: 'avs', 
        port: 2000, 
        status: 'working'
    }
    setTimeout(() => {
        backendData.modified = true
        console.log('data recieved', backendData)
    }, 2000)
}, 2000) */

/* const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data')
        const backendData = {
            server: 'avs', 
            port: 2000, 
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

pr.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
}).then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
}).then(data => {
    console.log('Modified data', data)
})
.catch(err => {console.error('Error:', err)})
.finally(() => {console.log('finally')}) */


const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

sleep(2000).then(() => console.log('after 2 sec'))
sleep(3000).then(() => console.log('after 3 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'))

Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('Race promises'))