import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// import logo from "../Assets/logo.png";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import {
  AiOutlineForm
} from 'react-icons/ai'
// AiOutlineUser,
// AiOutlineProject,
// AiOutlineHome,
// AiFillCamera,
import { AiFillInstagram } from 'react-icons/ai'
import { INSTAGRAM_LINK } from '../constants'

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
      style={{ background: 'rgba(0, 0, 0, 0.3)'}}
    >
      <Container>
        {/*
        TODO:
        upload new logo png and enable

        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded')
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ float: "left" }} defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  TOO
                  <strong className="main-name">TRIPSY</strong>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                ABOUT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/clients" onClick={() => updateExpanded(false)}>
                BRANDS
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/gallery" onClick={() => updateExpanded(false)}>
                WORK
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <AiOutlineForm style={{ marginBottom: '2px' }} /> CONTACT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/instagram" target="_blank" onClick={() => updateExpanded(false)}>
                <AiFillInstagram style={{ marginBottom: '2px' }} /> INSTAGRAM
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
