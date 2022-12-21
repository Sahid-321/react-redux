const initialState = {
    list: []
}

const TodoReducer = (state = initialState, action)=>{
    switch(action.type){

        case 'ADD_TODO':
            const {id, data} = action.payload;
            return{
                list:[...state.list,{
                    id:id,
                    data:data
                }]
            }

            case "DELETE_TODO":
const newData = state.list.filter((elem)=>
elem.id !== action.id
)
            return {
           ...state.list,
                list: newData
            }
default: return state

    }
}


export default TodoReducer;