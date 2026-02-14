import { Container, Row, Col, Button } from "react-bootstrap";
import heroimage from "../assets/Adobe Express - file.png";

export default function Hero() {
  return (
    <section className="hero-section px-3 px-md-5" id="home">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          
          {/* Text Section */}
          <Col xs={12} md={6} lg={6} className="mb-4 mb-md-0">
            <h1>
              Hello<span className="dot">.</span>
            </h1>
            <h2>I’m Snehal Ramteke Ambade</h2>
            <h1>MERN Developer</h1>

            <div className="hero-btns d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <Button className="btn-orange" href="#projects">
                My projects
              </Button>
              <Button variant="outline-info" className="resume-btn">
                My resume
              </Button>
            </div>
          </Col>

          {/* Image Section */}
          <Col xs={12} md={6} lg={6} className="text-center">
            <div className="hero-img-wrapper">
              <img
                src={heroimage}
                alt="profile"
                className="img-fluid"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
