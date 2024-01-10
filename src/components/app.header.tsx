'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppHeader() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top mt-5">
        <Container>
            <Navbar.Brand>
                <img
                  alt=""
                  src="image/logo.png"
                  width="50%"
                  className="d-inline-block align-top"
                />
            </Navbar.Brand>      

            <Nav className='justify-content-end'>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/aboutUs">About Us</Nav.Link>
                <Nav.Link href="/contactUs">Contact Us</Nav.Link>
              </Nav>
          </Container>
      </Navbar>

    </>
  );
}
export default AppHeader;