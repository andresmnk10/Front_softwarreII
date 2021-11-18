import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
export default function Navigation() {
    return (
        
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>React Java</Navbar.Brand>
                <Navbar.Collapse id="main-menu">
                <Nav className="mr-auto">
                    <Nav.Link>Create Post</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>Crear cuenta</Nav.Link>
                    <NavDropdown title="Alexis Salazar" id="menu-dropdown"></NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}
