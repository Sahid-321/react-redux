import {combineReducers} from "redux"
import TodoReducer from "./todoReducer"

const MainReducer = combineReducers(TodoReducer)

export default MainReducer