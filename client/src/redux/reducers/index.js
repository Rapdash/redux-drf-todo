import { combineReducers } from "redux";

import { } from "./auth_reducer";
import { } from "./todo_reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer
})