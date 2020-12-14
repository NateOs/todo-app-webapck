import uuidv4 from "uuid/v4"
import renderTodos from "./views"
import getFilters from "./filters"

// let todos = [] //todos is assigned an empty array returned from the fxn or an array(s) of todos

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
// getSavedTodos
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : [] //if (todosJSON !== null) execute 'a' else 'b'
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
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

export { getSavedTodos, createTodo }


