
export const addTodo  = (data)=>{
    return{
        type:"ADD_TODO",
        payload:{
        id: Math.random(),
        data: data
        }
    }
}

export const deleteTodo  = (data)=>{
    return{
        type:"DELETE_TODO",
        payload:{
        id: Math.random(),
        data: data
        }
    }
}

export const removeTodo  = (data)=>{
    return{
        type:"REMOVE_TODO",
        payload:{
        id: Math.random(),
        data: data
        }
    }
}