const num = 50 //integer
const float = 50.25 //float
const pow = 10e3
const big = 1_000_000
const negative = -10

// console.dir(Number)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) -1)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// // console.log(1 / 0)
// console.log(Number.isFinite(Infinity))
// const weird = 30 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(22))

const strInt = '25'
const strFloat = '25.25'

// console.log(Number(strInt))
// console.log(Number(strFloat))
// console.log(parseInt(strInt))
// console.log(parseFloat(strFloat))
// console.log(+strInt, +strFloat)

// console.log(+(0.1 + 0.2).toFixed(1))


//BigInt

// console.log(BigInt(Number.MIN_SAFE_INTEGER) + 94224980n)

// console.log(parseInt(6n) - 2)

// Math 

// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 6))
// console.log(Math.abs(-22))
// console.log(Math.max(2, 6, 7 , 10))
// console.log(Math.min(2, 6, 7 , 10))

// console.log(Math.floor(5.2))
// console.log(Math.ceil(5.2))
// console.log(Math.round(5.4))
// console.log(Math.trunc(8.4))
// console.log(Math.random())

function getRandomNum (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const num1 = getRandomNum(10, 25)

console.log(num1)