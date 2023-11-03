import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginRegister from './LoginRegister'

const isAuth = false; //placeholder

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#Dashboard">CTRL - R</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#Lessons">Lessons</Nav.Link>
                <Nav.Link href="#ProgressPath">Progress Path</Nav.Link>
                <Nav.Link href="#Profile">Profile</Nav.Link>
                <LoginRegister auth = {isAuth}/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;