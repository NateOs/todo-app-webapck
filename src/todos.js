import uuidv4 from "uuid/v4"
// import renderTodos from "./views"
// import getFilters from "./filters"

let todos = []

//create todo
const createTodo = (todos, text) => {
    todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
    saveTodos(todos)
    renderTodos(todos, getFilters())
}

// Fetching already created todos
// loadTodos
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : [] //if (todosJSON !== null) execute 'a' else 'b'
    } catch (e) {
        return []
    }
}

//exposeTodos
const exposeTodos = () => todos

// Save todos to localStorage
const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
}

// //removetodos by id
// const removeTodo = (id) => {
//     const TodoIndex = todos.findIndex( (todo) =>  todo.id === id)

//     if (TodoIndex > -1) {
//         todos.splice(TodoIndex, 1)
//     }
// }

//toggleTodo
// const toggleTodo = (id) => {  //this functions sets the completed status of a todo to its opposite, either true or false, the result is toggled by the checkbox
//     const TodoIndex2 = todos.findIndex( (todo) => {
//         return todo.id === id
//     })
//     if (TodoIndex2 > -1) {
//         todos[TodoIndex2].completed = !todos[TodoIndex2].completed
//     }
// }

export { loadTodos, createTodo, exposeTodos }

//Setup the empty todos array

//loadTodos
//Arguments: none
//Return value: none

//saveTodos
//Arguments: none
//Return value: none

//getTodos
//Arguments: none
//Return value: todos array

//createTodo
//Arguments: todo text
//Return value : none

//removeTodo
//Arguments: id of todo to remove
//Remove value : none

//toggleTodo
//Arguments: id of todo to toggle
//Return value: none

//Make sure to call loadTodos and setup the exports


