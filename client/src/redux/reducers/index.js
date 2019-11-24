import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { } from "./todoReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer
})