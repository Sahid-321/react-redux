const initialState  = {
    list:[]
}

const TodoReducer = (state=  initialState, action)=>{
switch(action.type){
    
    case "ADD_TODO":
        const{id, data} = action.payload
        return{
            ...state,
            list:[
                ...state.list,{
                    id: id,
                data: data
                
                }
                
            ]
        }
         
    case "DELETE_TODO":

    const NewList = state.list.filter((elem)=> elem.id!== action.id)
    
        return{
            ...state,
            list: NewList
          
        }

        case "REMOVE_ALL":

            
                return{
                    ...state,
                    list:[]
                  
                }
        default: return state;
}


}
export default TodoReducer;