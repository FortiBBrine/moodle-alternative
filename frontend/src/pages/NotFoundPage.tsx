import React from 'react';
import {Container} from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <Container className="d-flex flex-column gap-2">
            <p style={{
                textAlign: 'center',
                fontSize: 35
            }}>Помилка 404. Сторінку не знайдено.</p>
        </Container>
    );
};

export default NotFoundPage;