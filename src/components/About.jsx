import { Container, Row, Col } from "react-bootstrap";
import { GrNode, GrReactjs } from "react-icons/gr";
import { ImCss3, ImHtmlFive2 } from "react-icons/im";
import { IoLogoNodejs } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandCss3, TbBrandMongodb } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import aboutimage from "../assets/gradient-metaverse-illustration_23-2149265633edit.png";

export default function About() {
  return (
    <>
    <section className="sectionskills">
  <Container>
    <Row className="text-center">
      <Col xs={6} sm={4} md={3} lg={2}>
        <ImHtmlFive2 color="#de4923" size={30} />
        <div>HTML</div>
      </Col>

      <Col xs={6} sm={4} md={3} lg={2}>
        <TbBrandCss3 color="#0b6db3" size={38} />
        <div>CSS</div>
      </Col>

      <Col xs={6} sm={4} md={3} lg={2}>
        <IoLogoNodejs color="#ceb32f" size={35} />
        <div>JavaScript</div>
      </Col>

      <Col xs={6} sm={4} md={3} lg={2}>
        <RiBootstrapLine color="#8814f5" size={35} />
        <div>Bootstrap</div>
      </Col>

      <Col xs={6} sm={4} md={3} lg={2}>
        <GrReactjs color="#00d5f7" size={30} />
        <div>React JS</div>
      </Col>

      <Col xs={6} sm={4} md={3} lg={2}>
        <GrNode color="#7fc728" size={30} />
        <div>Node JS</div>
      </Col>

      <Col xs={6} sm={4} md={3} lg={2}>
        <TbBrandMongodb color="#69a746" size={35} />
        <div>MongoDB</div>
      </Col>
    </Row>
  </Container>
</section>

    <section className="sectionabout" id="about">
  <Container>
    <Row className="align-items-center">
      
      {/* Image */}
      <Col xs={12} md={6} className="text-center">
        <img
          src={aboutimage}
          alt="about"
          className="img-fluid p-3"
        />
      </Col>

      {/* Text */}
      <Col xs={12} md={6}>
        <h2>About me</h2>
        <p>
          Hi. I'm Snehal.
          I’m a passionate Full Stack Developer with hands-on experience
          in MERN stack applications and building scalable, user-friendly
          web applications. I enjoy solving problems, writing clean code,
          and continuously improving my skills.
        </p>
      </Col>

    </Row>
  </Container>
</section>
    </>
  );
}
