let initialState = {
    
  list: []
}

const TodoReducer = (state = initialState, action)=>{
switch(action.type){
    case "ADD_TODO":
        const {id,data} = action.payload
        return{
list:[...state.list, {
    id:id,
data:data
}]
        }
}

}

export default TodoReducer;