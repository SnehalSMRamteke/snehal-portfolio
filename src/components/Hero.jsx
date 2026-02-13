import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero-section px-5" id="home">
      <Container className="">
        <Row className="align-items-center ">
          <Col md={6} lg={6}>
            <h1>Hello<span className="dot">.</span></h1>
            <h2>I’m Snehal Ramteke Ambade</h2>
            <h1>MERN Developer</h1>

            <div className="hero-btns">
              <Button className="btn-orange me-3" href="#projects">My projects</Button>
              <Button variant="outline-info resume-btn">My resume</Button>
            </div>
          </Col>

          <Col md={6} lg={6} className="text-center">
            <div className="hero-img-wrapper">
              <img
                src="\src\assets\Adobe Express - file.png"
                alt="profile" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
