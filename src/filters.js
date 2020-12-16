const filters = { //an object for matching values
    searchText: '',
    hideCompleted: false
}

const getFilters = () => {  
    return filters
}

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted
    }
}

export { getFilters, setFilters }

// //Setup filters default object

// //setFilters
// //Arguments: updates object with optional searchText or hideCompleted
// //Return value: none

// //Make sure to setup the exports