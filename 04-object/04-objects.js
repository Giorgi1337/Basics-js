const person = {
    name: 'Giorgi',
    age: 21,
    languages:['ge','eng','ru'],
    address:{
        city:'Tbilisi',
        street: 'Balanchini',
    },
    'complex key' : 'complex value',
    [1 + 2] : 'computed value',
    greet() {
        console.log('Gree from person')
    },
    arrow: () => {
        console.log('Person Arrow')
    },
    info() {
        console.log('Person name:', this.name)
    },
}

// console.log(person)
// person.info()


//======== Destructuring 


// const name = person.name
// const age = person.age
// const languages = person.languages

// const { name, age, languages} = person

// console.log(name, age, languages)


// for(let key in person) {
//     // console.log(key)
//     if(person.hasOwnProperty(key)){
//         console.log(person[key])
//     }
// }

// Object.keys(person).forEach((key) =>{
//     console.log(person[key])
// })

// const logger = {
//     keys(obj) {
//         console.log('Object keys', Object.keys(this))
//     },

//     keysAndValues() {
//         Object.keys(this).forEach((key) =>{
//             console.log('Key', key)
//              console.log('Value', this[key])
//         })
//     },
// }

// const bound = logger.keys.bind(person)()   

// logger.keys.apply(person)
// logger.keys.call(person)


// class Human {
//     inHuman = true;
// }


// class Person extends Human{
//     constructor(name, age) {
//         super()
//         this.name = name
//         this.age = age
//     }
//     sayHello(){
//         console.log('Hello', this.name)
//     }
// }

// const person1 = new Person('Giorgi',21)

// console.log(person1)

// person1.sayHello() 

// console.log(person1)
