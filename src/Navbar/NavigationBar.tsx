import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
            <Navbar expand="lg" variant='dark' bg='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>Komputer Serwis</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to='/services'><b>Serwis</b></Nav.Link>
                            <Nav.Link as={Link} to='/shop'><b>Sklep</b></Nav.Link>
                            <Nav.Link><b>Witaj, Użytkowniku</b></Nav.Link>
                            <Nav.Link><b>Wyloguj</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default NavigationBar;