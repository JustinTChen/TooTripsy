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
import { RGBADepthPacking } from 'three'

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
      style={{ background: 'rgba(0, 0, 0, 0.4)'}}
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
              <Nav.Link as={Link} to="/instagram" onClick={() => updateExpanded(false)}>
                <AiFillInstagram style={{ marginBottom: '2px' }} /> INSTAGRAM
              </Nav.Link>
            </Nav.Item>

            {/* 
            
            TODO: Add form to forward message to email
            
            <Nav.Item className="email-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
