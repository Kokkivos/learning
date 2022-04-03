const express = require('express')
const app = express()

app.use(express.json())

let list = [
    {
        "id": 1,
        "text": "Element 1"
    },
    {
        "id": 2,
        "text": "Element 2"
    },
    {
        "id": 3,
        "text": "Element 3"
    },
    {
        "id": 4,
        "text": "Element 4"
    },
    {
        "id": 5,
        "text": "Element 5"
    },
    {
        "id": 6,
        "element": "Element 6"
    },
] 

app.get('/', (request, response) => {
    response.send('<h1>Todo correcto</h1>')
})

app.get('/list', (request, response) => {    
    response.json(list)
})

app.get('/list/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const element = list.find(elem => elem.id === id)

    if(element){
        response.json(element)
    }
    else{
        response.status(404).end()
    }

})

app.delete('/list/:id', (request, response) => {
    const id = parseInt(request.params.id)
   list = list.filter(elem => elem.id !== id)

   console.log(list)

   response.status(204).end()

})

app.post('/list/add-element', (request, response) => {
    const postElem = request.body

    const ids = list.map(elem => elem.id)
    const maxId = Math.max(...ids)

    if (!postElem || !postElem.text){
        response.status(400).json({
            error: 'element.text is missing'
        })
    }

    const newElement = {
        id: maxId + 1,
        text: postElem.text || '--'
    }

    list = [...list, newElement]
    response.json(newElement)

})


const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`)
})