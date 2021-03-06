import React from 'react'
import { Nav } from 'react-bootstrap'

export const Navbar = () => {
    return (
        <React.Fragment>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item href="/">Home</Nav.Item>
                <Nav.Item href="/about">About</Nav.Item>
                <Nav.Item href="/gallery">Gallery</Nav.Item>
                <Nav.Item href="/events">Events</Nav.Item>
                <Nav.Item href="/contribute">Contribute</Nav.Item>
                <Nav.Item href="/contact">Contact Us</Nav.Item>

            </Nav>

        </React.Fragment>
    )
}
