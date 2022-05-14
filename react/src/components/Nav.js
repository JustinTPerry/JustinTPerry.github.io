import { Navbar, Nav, Container } from "react-bootstrap"
export default function AppNav(props) {
    return (
        <Navbar className='nav navbar-dark fixed-top' expand="lg">
        <Container id="container">
          <Navbar.Brand className='nav--logo'>Justin Perry</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav--list">
              <li><a href="https://github.com/JustinTPerry"><img className="nav--image"src={require("../images/github.png")} alt="Github"/></a></li>
              <li><a href="https://linkedin.com/in/justin-t-perry"><img className="nav--image"src={require("../images/linkedin.png")} alt="LinkedIn"/></a></li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}