
let currentInput = ""
const listInput = (ev) => {
    currentInput = ev.target.value
}

const mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'max-w-sm mx-auto text-lg')
const comDiv = document.createElement('div')
comDiv.setAttribute('class', 'max-w-sm mx-auto p-2  text-lg rounded-md  text-white transform ')

const input = document.getElementById("myinput")
input.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter') {
        ev.preventDefault()
        document.getElementById('myBtn').click()
    }
})

const addlist = () => {
    const Taskspan = document.createElement('p')
    Taskspan.setAttribute('class', 'group flex justify-between p-2  transform hover:bg-blue-100 hover:scale-105 transition duration-100 ease-in-out rounded-md hover:shadow-lg bg-white')
    const span = document.createElement('p')
    const btndiv = document.createElement('div')
    btndiv.setAttribute('class', 'space-x-2')
    if (currentInput != "") {
        span.innerHTML = currentInput
        Taskspan.append(span)
        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'text-white  px-4 group-hover:bg-red-600  rounded-md')
        delBtn.innerHTML = "Delete"
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(Taskspan)
        })

        const comBtn = document.createElement('button')
        comBtn.setAttribute('class', 'text-white  px-4 group-hover:bg-green-600  rounded-md')
        comBtn.innerHTML = "Done"
        comBtn.addEventListener('click', () => {
            const del = document.createElement('del')
            del.innerHTML = span.innerHTML
            del.append(document.createElement('br'))
            comDiv.prepend(del)
            mainDiv.removeChild(Taskspan)
        })

        btndiv.append(comBtn)
        btndiv.append(delBtn)
        Taskspan.append(btndiv)
        mainDiv.prepend(Taskspan)
        document.body.append(mainDiv)
        document.body.append(comDiv)
    }
    else {
        alert("Task cannot be empty")
    }
}