import { createStore,  combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ListReducers } from "./reducers/ListReducers";

const reducer = combineReducers({
    todoItem: ListReducers
})

const middleware = [thunk]

const todoItemsFromStorege = localStorage.getItem('listItems') ? JSON.parse(localStorage.getItem('listItems')) : []

const initalState= {
    todoItem: {todoList: todoItemsFromStorege}
}

const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
