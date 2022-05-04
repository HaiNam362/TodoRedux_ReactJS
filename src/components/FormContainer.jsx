import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
    return (
        <Container className='bg-secondary py-5'>
            <Row className='justify-content-md-center'>
                <Col sx={12} md={9}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer;