import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addList} from '../redux/actions/ListActions';
import { Form, Row, Col, Button } from 'react-bootstrap';

const TodoListForm = () => {
    const [List, setList] = useState('');
    const dispatch = useDispatch();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addList(List))
        setList('');
    }

    return (
        <Form className="mx-2 my-2" onSubmit={onSubmitHandler}>
            <Form.Group controlId="inputList">
                <Row>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            placeholder="Enter your List"
                            value={List}
                            onChange={(e) => setList(e.target.value)}
                            required
                        />
                    </Col>
                    <Col md={4}>
                        <Button type="submit">Add Item to do list</Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}

export default TodoListForm