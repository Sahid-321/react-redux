export const addTodo =(data)=> {
return {
    type: 'ADD_TODO',
    payload:{
id: Math.random(),
data:data
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