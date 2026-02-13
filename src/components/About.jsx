import { Container, Row, Col } from "react-bootstrap";
import { GrNode, GrReactjs } from "react-icons/gr";
import { ImCss3, ImHtmlFive2 } from "react-icons/im";
import { IoLogoNodejs } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandCss3, TbBrandMongodb } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

export default function About() {
  return (
    <>
    <section className="sectionskills" >
      <Container>
        <Row>
          <Col ><ImHtmlFive2  color="#de4923"  size={30}/>HTML</Col>
          <Col ><TbBrandCss3 color="#0b6db3" size={38} />CSS </Col>
          <Col > <IoLogoNodejs color="#ceb32f" size={35}/>Javascript</Col>
          <Col > <RiBootstrapLine color="#8814f5" size={35} />Boothstrap</Col>
          <Col ><GrReactjs color="#00d5f7" size={30} /> React JS</Col>
          <Col > <GrNode color="#7fc728" size={30} />Node JS</Col>
          <Col > <TbBrandMongodb color="#69a746" size={35} />Mongo DB</Col>
          
        </Row>
      </Container>
    </section>

     <section className="sectionabout" id="about">
      <Container>
        <Row>
          <Col md={6}>
            {/* <ul className="services">
              <li>Website Development</li>
              <li>App Development</li>
              <li>Website Hosting</li>
            </ul> */}
            <img src="\src\assets\gradient-metaverse-illustration_23-2149265633edit.png" alt="about" width={600}
            className="p-3" />
          </Col>

          <Col md={6}>
            <h2>About me</h2>
            <p>

              Hi. I'm Snehal . 
              I’m a passionate Full Stack Developer with hands-on experience
              in MERN stack applications using the MERN stack and build scalable & user-friendly web applications.
              I enjoy solving problems, building real-world products,
              writing clean code, creating clean UI, writing efficient
              backend logic and continuously improving my skills.

            </p>

            {/* <div className="stats">
              <div><h3>10+</h3><span>Completed Projects</span></div>
              <div><h3>100%</h3><span>Client Satisfaction</span></div>
              <div><h3>Fresher</h3><span>Experience</span></div>
            </div> */}
          </Col>


        </Row>
      </Container>
    </section>
    </>
  );
}
