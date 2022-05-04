import React from 'react';
import {Card} from 'react-bootstrap';
import TodoList from '../components/TodoList';
import TodoListForm from '../components/TodoListForm';

const HomeScreens = () => {
    return (
        <>
            <h1 className="text-center text-info">
                To do list
            </h1>
            <Card>
                <Card.Header className="text-center">
                    A to do list using react redux
                </Card.Header>
                <TodoListForm/>
            </Card>
            <h1 className="text-center text-info">
                Your list
            </h1>
            <TodoList/>
        </>
    )
}

export default HomeScreens