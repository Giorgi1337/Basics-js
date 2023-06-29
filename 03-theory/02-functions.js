// Function declaretion 

// function greet(name) {
//     console.log('hello -', name) // Can call before declare it
// }

// greet('Giorgi')

// ======================== Function Expression
// const greet2 = function greet(name) {
//     console.log('2hello -', name)       //Can call only after declare it
// }

// greet2('Giorgi')

// console.dir(greet)

// setTimeout(function () {
//     greet2('Giorgi')
// }, 2000)


// let counter = 0
// const interval = setInterval( function () {
//     if(counter === 5){
//         clearInterval(interval)
//     }else {
//     console.log(counter++)
//     }
// }, 1000)


// ======================Arrow Function 

// function greet(name) {
//     console.log('hello -', name) // Can call before declare it
// }

// const greet = (name, age) =>{
//     console.log('hello -', name, age)
// }

// greet('Giorgi', 21)

// const arrow = (name, age) => console.log('hello -', name, age)

// arrow('Giorgi', 21)

// const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(2, 3))

// ================== Default Parameters

// const sum = (a = 2, b = a * 3) => a + b

// console.log(sum())

const sumAll = (...number) => {
    // let res = 0 
    // for(let num of number) {
    //     res += num
    // }
    return number.reduce((acc, curr) => acc += curr, 0)
}

console.log(sumAll(1,2,3,4,5,6))

// ============================= Closures

function creatPerson(name) {
    return function (lastname) {
        console.log(name + ' ' + lastname)
    }
}

const addLastName = creatPerson('Giorgi')
addLastName('Kvatsabaia')
addLastName('Berize')