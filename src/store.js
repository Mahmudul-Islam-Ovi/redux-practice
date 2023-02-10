import { applyMiddleware, createStore } from "redux";
import todosReducer from "./components/Services/reducer/todoosReducer";
import thunk from "redux-thunk";

export const store = createStore(todosReducer , 
    applyMiddleware(thunk)); 