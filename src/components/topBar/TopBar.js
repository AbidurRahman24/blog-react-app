import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from '../../img/menu-img.jpg'
import { Context } from '../context/Context';
import './NavBar.css'
const TopBar = () => {
    
    const { user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand >
                        <Link to='/' className="link">
                            React-Bootstrap
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link className="link" to='/'>HOME</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="link" to='/about'>ABOUT</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="link" to='/contact'>CONTACT</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="link" to='/write'>WRITE</Link>
                            </Nav.Link>
                            {/* <Nav.Link>
                                <Link className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</Link>
                            </Nav.Link> */}
                        </Nav>
                        <Nav>
                            {user ? (
                                <Link className="link" to="/settings">
                                    <img
                                        className="topImg avatar"
                                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                        alt=""
                                    />
                                </Link>
                            ) : (
                                <ul className="topList">
                                    <li className="topListItem">
                                        <Link className="link" to="/login">
                                            LOGIN
                                        </Link>
                                    </li>
                                    <li className="topListItem">
                                        <Link className="link" to="/register">
                                            REGISTER
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default TopBar;