const inputElement = document.getElementById('title')
const creatBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// function render() {
    
//     for(let note of notes){
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
    // for(let i = 0; i < notes.length; i++){
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }

    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))

// render()

// creatBtn.onclick = function () {
//    if(inputElement.value.length === 0) {
//     return 
//    }

//     listElement.insertAdjacentHTML(
//         'beforeend',
//         getNoteTemplate(inputElement.value)
//     )

//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${title}</span>
//         <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>`
// }


const notes = [
    {
        title: 'Hello Dude',
        complited: false,
    },
    {
        title: 'Wassup',
        complited: true,
    }
]

function render() {  
    listElement.innerHTML = ''
    if(notes.length === 0 ){
        listElement.innerHTML = '<p>Nothing here</p>'
    } 
    for(let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}
render()

creatBtn.onclick = function () {
    if(inputElement.value.length === 0) {
     return 
    }
 
    const newNote = {
        title: inputElement.value,
        complited: false,
    }

    notes.push(newNote)
    render()
    //  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
     inputElement.value = ''
 }


listElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'toggle') {
            notes[index].complited = !notes[index].complited
        } else if (type === 'remove'){
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${note.complited ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <span>
            <span class="btn btn-small btn-${note.complited ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
        </span>
    </li>`
}