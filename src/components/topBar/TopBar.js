import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import pic from '../../img/menu-img.jpg'
import './NavBar.css'
const TopBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">HOME</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                            <Nav.Link href="/contact">CONTACT</Nav.Link>
                            <Nav.Link href="/write">WRITE</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                            <img src={pic} alt="Logo" className="avatar"/>;
                            </Nav.Link>
                            <Nav.Link href="/logout">LOGOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default TopBar;