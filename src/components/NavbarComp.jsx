import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar fixed="top" expand="md" className="nav-dark">
      <Container>
        <Navbar.Brand className="logo text-light">
          Snehal Ramteke Ambade
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="colorDark" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
