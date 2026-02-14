import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

export default function Contact() {
  return (

    <>
    {/* <section className="section contact" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Have a project?</h2>
            <h3>Let’s talk!</h3>
          </Col>

          <Col md={6}>
            <Form>
              <Form.Control placeholder="Name" />
              <Form.Control placeholder="Email" />
              <Form.Control as="textarea" placeholder="Message" />
              <Button className="btn-orange mt-3">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section> */}


     <section className="section contactfooter" id="contact">
      <Container>
        <Row>
          <Col>
            <h3>Snehal Ramteke Ambade</h3>
            <p>made by @Snehal Ramteke Ambade</p>

            <div className='pt-2'>
              <a style={{cursor:"pointer"}} href="https://github.com/SnehalSMRamteke"><FaGithub  color="#000000" size={30} className='me-3'/></a>
              <a style={{cursor:"pointer"}} href="www.linkedin.com/in/snehal-ramteke-0a6824169"><TbBrandLinkedin color="#0b63bd" size={32} className='me-3'/></a>
              {/* <a style={{cursor:"pointer"}} href=""><BiLogoGmail color="#cf4b3c" size={32} className='me-3'/></a> */}

            </div>
          </Col>

          {/* <Col md={6}>
            <Form>
              <Form.Control placeholder="Name" />
              <Form.Control placeholder="Email" />
              <Form.Control as="textarea" placeholder="Message" />
              <Button className="btn-orange mt-3">Submit</Button>
            </Form>
          </Col> */}
        </Row>
      </Container>
    </section>

    </>
  );
}
