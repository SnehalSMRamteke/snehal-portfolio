import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar fixed="top" className="nav-dark">
      <Container>
        <Navbar.Brand className="logo text-light">Snehal Ramteke Ambade</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
