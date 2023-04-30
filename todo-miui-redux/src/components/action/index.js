export const addTodo = (data)=>{
    return{
        type:'ADD_TODO',
        payload:{
            id: Math.random(),
            data: data
        }
    }
}

export const deleteTodo = (id)=>{
    return{
        type:'DELETE_TODO',
        id
    }
}

// export const removeAll = ()=>{
//     return {
//         type:'REMOVE_ALL'
//     }
// }