import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../media/img/MeetSetu.png'

function NavbarComp() {
let email = localStorage.getItem('user')
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="">
        <img src={Logo} alt="asdasf" style={{width:'150px',height:'auto'}} />      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex w-100 justify-end " style={{alignItems:'center'}}>
          <Nav.Link><p class="mr-5 hover:text-gray-900" style={{marginBottom:0}}>{email}</p></Nav.Link>
          <Nav.Link >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
            </Nav.Link>            
        </Nav>          
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default NavbarComp