import { getSavedTodos, createTodo } from "./todos"
import { renderTodos } from "./views"
import { getFilters } from "./filters"
 
let todos = getSavedTodos() //todos is assigned an empty array returned from the fxn or an array(s) of todos

renderTodos(todos, getFilters())

//getting search value
document.querySelector('#search-text').addEventListener('input',  (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, getFilters())
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