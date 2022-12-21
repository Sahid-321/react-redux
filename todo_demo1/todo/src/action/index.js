export const addTodo =()=> {
return {
    type: 'ADD_TODO',
    payload:{

    }
}
}

export const deleteTodo = ()=>{
    return{
        type: 'DELETE_TODO'
    }
}

export const removeAll = ()=>{
    return {
        type: 'REMOVE_ALL'
    }
}