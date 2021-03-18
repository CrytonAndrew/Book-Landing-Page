import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"

const Header = () => {
    return (
        <header>
             <Navbar  variant="dark">
                <Container className="header-container">
                    <Navbar.Brand href="#home" className="logo-header">Roxanne Smith</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Author</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
