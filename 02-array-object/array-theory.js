    const names = ['Giorgi','Anna','Saba','Jaba','Salome']

    // names.push('Alena')
    // names.unshift('Alena')

    // const name = names.shift()
    // const name = names.pop()

    // const reversed = names.reverse() 
    // const reversed = names.toReversed()

    // const lerrers = ['f,','e','c','b','d','a']
    // console.log(lerrers.sort())
    // console.log(lerrers.toSorted())
    // console.log(lerrers)

    // console.log(names.splice(0, 2))
    // console.log(names.toSpliced(0, 2))
    // console.log(names)

    // const woman = 'Salome'
    // const index = names.indexOf(woman)
    // console.log(index)
    // const newNames = names.with(index, 'Awesome Salome')
    // names[index] = 'Awesome Salome'
    // console.log(names[index])
    // console.log(names)

    // const capitalNames = names.map( (name, index) => {
    //     if(index === 4){
    //         return 'Awesome Salome'
    //     }
    //     return name
    // })

    // console.log(capitalNames)

    // console.log(names.includes('Anna','jora'))

    const people = [
        {name: 'Giorgi', budget: 1000},
        {name: 'Anna', budget: 500},
        {name: 'Saba', budget: 2500},
        {name: 'Jaba', budget: 125},
        {name: 'Salome', budget: 800},
    ]

    // let findedPerson 


    // for(let person of people ) {
    //     if(person.budget === 500) {
    //         findedPerson = person
    //     }
    // }

    // const finded = people.find(p => p.budget === 125)

    // const findedPerson = people.find( person => {
    //     return person.budget === 500
    // })

    // const finded = people.findIndex( person => {
    //     return person.budget === 500
    // })


    // console.log(people[finded])
    // console.log(people.with(finded, 650))

    // const filtred = people.filter( p => p.budget > 800)

    // let sumBudget = 0;

    // console.log(filtred)
    // filtred.forEach( p => sumBudget += p.budget)

    // console.log(sumBudget)


    const sumBudget = people
    .filter(p => p.budget > 800)
    .map(p => p.budget)
    .reduce((acc, p) => acc + p)

    console.log(sumBudget)