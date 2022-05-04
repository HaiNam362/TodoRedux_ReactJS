import { LIST_ADD, LIST_DELETE, LIST_UPDATE , LIST_REMOVE} from '../../constants/ListContants';

export const addList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_ADD,
        payload: {
            name: name,
            complete: false,
        }
    })
    // save to local storage
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const deleteList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_DELETE,
        payload: name,
    })
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const updateList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_UPDATE,
        payload: {
            name: name,
            complete: true,
        }
    })
    // save to local storage
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const removeList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_REMOVE,
        payload: {
            name: name,
            complete: false,
        }
    })
    // save to local storage
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}