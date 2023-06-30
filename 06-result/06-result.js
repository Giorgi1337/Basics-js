// // const car = {
// //     mode: 'BMW',
// //     year: '2020',
// // }

// // const json = JSON.stringify(car)
// // const parsed = JSON.parse(json)

// // console.log(json)
// // console.log(parsed)

// const list = document.querySelector('#list')
// const filter = document.querySelector('#filter')
// let users = []

// async function start () {
//     list.innerHTML = 'Loading...'
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users',)
//         const data =  await response.json()
//         setTimeout(() => {
//             users = data
//             render(data)
//         }, 2000)
        
//     } catch (err) {

//     }
// }

// function render(users = []) {
//     const html = users.map(toHTML).join('')
//     list.innerHTML = html
// }

// function toHTML(user) {
//     return `
//     <li class = 'list-group-item'>${user.name}</li>
//     `
// }

// start()


// filter.addEventListener('input', (event) =>{
//     const value  = event.target.value.toLowerCase()
//     const filtredUsers = users.filter((user) => {
//         user.name.toLowerCase().includes(value)
//     }) 
//     render(filtredUsers)
// })