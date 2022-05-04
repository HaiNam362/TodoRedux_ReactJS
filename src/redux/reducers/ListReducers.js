import { LIST_ADD, LIST_DELETE, LIST_UPDATE, LIST_REMOVE } from "../../constants/ListContants";


export const ListReducers = (state = { todoList: [], repeat: false }, action) => {
    switch (action.type) {
        case LIST_ADD:
            const newList = action.payload;
            const CheckName = state.todoList.find(x => x.name === action.payload.name);
            if (!CheckName) {
                return {
                    ...state,
                    repeat: false,
                    todoList: [...state.todoList, newList]
                }
            } else {
                return {
                    ...state,
                    repeat: true,
                }
            }
        case LIST_DELETE:
            return {
                ...state,
                todoList: state.todoList.filter(x => x.name !== action.payload)
            }
        case LIST_UPDATE:
            const _isNoteUpdate = state.todoList.find(x => x.name === action.payload.name)
            return {
                ...state,
                todoList: state.todoList.map((x) => x.name === _isNoteUpdate.name ? action.payload : x)
            }
        case LIST_REMOVE:
            const _isNoteRemove = state.todoList.find(x => x.name === action.payload.name)
            return {
                ...state,
                todoList: state.todoList.map((x) => x.name === _isNoteRemove.name ? action.payload : x)
            }
        default:
            return state
    }
}