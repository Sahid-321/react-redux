export const addTodo = (data)=>{
return{
    type: "ADD_TODO",
    payload:{
        id: Math.random(),
        data: data
    }
}
}