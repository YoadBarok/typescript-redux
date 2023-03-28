import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import usersReducer from "./usersReducer";


const reducers = combineReducers({
    bank: bankReducer,
    users: usersReducer 
})

export default reducers;

export type State = ReturnType<typeof reducers>