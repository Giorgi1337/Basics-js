/// Event Loop 

// const timeout = setTimeout(() =>{
//     console.log('qeqeqe1')
// }, 2000)


// clearTimeout(timeout)

// setTimeout(() =>{
//     console.log('saddasdad')
// }, 1000)


// let count = 0
// setInterval(() => {
//     console.log('tick', count++ )
// }, 1000);


// function delay(callback, time = 1000) {
//     setTimeout(callback, time)
// }

const delay = (time = 1000) => {
    const promise = new Promise((resolve,reject) =>{
        setTimeout(() => {
         resolve([1,2,3])
            reject('Error')
        }, time)
    })
    return promise
}                                                                                           

// delay(2500).then((data) => {
//     console.log('Timeout', data)
//     return data.map((a) => a ** 2)
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err) =>{
//     console.log(err)
// })
// .finally(() => console.log('Finally'))

const getData = () => new Promise((resolve) => resolve([1,2,3,4]))


 async function async () {
    try {
        await delay(2000)
        const  data =  await getData()
        console.log(data)
    }catch (err) {
        console.log(err)
    } finally {
        console.log('Finally')
    }
}

async()