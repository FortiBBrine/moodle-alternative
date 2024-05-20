import React, {FC} from 'react';
import "./App.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: FC = () => {
    return (
        <div>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Піфагор</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Головна</Nav.Link>
                        <Nav.Link href="teachers">Вчителі</Nav.Link>
                        <Nav.Link href="students">Учні</Nav.Link>
                        <Nav.Link href="subjects">Предмети</Nav.Link>
                        <Nav.Link href="about">Про проект</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className="mt-3">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Container>


            <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
                <Container className="me-auto justify-content-center">
                    <Navbar.Text>Сайт було створено в 2024 році для конкурсу Star for Life</Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
};

export default App;