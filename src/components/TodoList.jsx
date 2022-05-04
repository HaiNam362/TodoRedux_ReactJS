import React from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Message from './Message';
import { deleteList, updateList, removeList } from '../redux/actions/ListActions';


const TodoList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todoItem);
    const { todoList, repeat } = data;

    const handleDelete = (name) => {
        dispatch(deleteList(name));
    }

    const handleUpdate = (name) => {
        dispatch(updateList(name));
    }

    const handleInUpdate = (name) => {
        dispatch(removeList(name));
    }

    if (todoList.length > 0) {
        return (
            <>
                {repeat && <Message variant="danger">This note is alredy added, please choose another one</Message>}
                <ListGroup>
                    {
                        todoList.map((list) => (
                            <ListGroup.Item variant={list.complete ? "success" : "danger"}>
                                <Row>
                                    <Col md={8} xs={8}>
                                        - {list.name}
                                    </Col>
                                    <Col md={2} xs={2}>
                                        {
                                            list.complete === true ? (
                                                <Button variant="success" onClick={() => handleInUpdate(list.name)}>
                                                    <i className="fa-solid fa-check"></i>
                                                </Button>
                                            ) : (
                                                <Button variant="danger" onClick={() => handleUpdate(list.name)}>
                                                <i className="fa-solid fa-eraser"></i>
                                                </Button>
                                            )
                                        }
                                    </Col>
                                    <Col md={2} xs={2}>
                                        <Button variant="danger" onClick={() => handleDelete(list.name)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </>
        )
    } else {
        return (
            <ListGroup>
                <ListGroup.Item className="text-center">
                    NoThing To Do
                </ListGroup.Item>
            </ListGroup>
        )
    }
}

export default TodoList