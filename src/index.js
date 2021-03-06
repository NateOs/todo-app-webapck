import { renderTodos } from "./views"
import { exposeTodos, createTodo, loadTodos } from "./todos"
import { getFilters, setFilters } from "./filters"

const filters = getFilters()
let todos = exposeTodos()

renderTodos()

//getting search value
document.querySelector('#search-text').addEventListener('input',  (e) => {

    setFilters(e.target.value)
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//adding todo
document.querySelector('#new-todo').addEventListener('submit',  (e) => {
    e.preventDefault() //remove default browser behaviour

    const text = e.target.elements.text.value.trim() //remove empty spaces from text
    if (text.length > 0) {
        
        createTodo(todos, text)
    e.target.elements.text.value = '' //clears the textbox after saving a todo entry
    }       
})

document.querySelector('#hide-completed').addEventListener('change',  (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})



//Add necessary imports

//Render initial todos

//Setup search text handler

//Setup checkbox handler

//Setup form submission handler

//Bonus: Add a watcher for local storage