import { Container, Row, Col, Card, Button } from "react-bootstrap";
import dashboardImg from "../assets/dashboardmusiz.PNG";
import doctorApp from "../assets/doctorApp.PNG";
import taskManage from "../assets/taskManage.PNG";
import foodmart from "../assets/foodmart.PNG";
import peoplediectory from "../assets/peoplediectory.PNG";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>

        {/* PROJECT 1 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Card className="project-card ps-1">
              <Card.Body>
                <Card.Title className="text-light">MyMusix -Spotify (Clone)</Card.Title>
                <Card.Text>
                  A full-stack music streaming application with user
                  authentication and management, creating playlists, adding songs and audio playback using the MERN
                  stack.
                </Card.Text>

                <div className="tech-stack">
                  <span className="badgetech">HTML</span>
                  <span className="badgetech ms-1">CSS</span>
                  <span className="badgetech ms-1">Javascript</span>
                  <span className="badgetech ms-1">Boothstrap</span>
                  <span className="badgetech ms-1">React JS</span>

                    {/* CSS • Javascript • Boothstrap • React JS • Node JS • Express • MongoDB */}
                </div>

                 <div className="tech-stack">
                  <span className="badgetech ms-1">Node JS</span>
                  <span className="badgetech ms-1">Express</span>
                  <span className="badgetech ms-1">MongoDB</span>
                </div>

                <div className="d-flex gap-3 project-btns">
                  <Button className="btn-orange" href="https://github.com/SnehalSMRamteke/Spotify_clone_client" target="_blank">GitHub</Button>
                  {/* <Button variant="outline-light livedemoBtn">Live Demo</Button> */}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="code-box">
            <img src={dashboardImg} alt="dashmusiz" width="630px" className="img-fluid"/>
            {/* <img src="src\assets\dashboardmusiz.PNG" alt="dashmusiz" width="630px" /> */}
          </Col>
        </Row>

        {/* PROJECT 2 (REVERSED) */}
        <Row className="align-items-center mb-5 flex-row-reverse mt-3">
          <Col md={6}>
            <Card className="project-card">
              <Card.Body>
                <Card.Title className="text-light">Doctor Appointment Application</Card.Title>
                <Card.Text>
                  An Doctor Appointment management platform which is MERN-based web application that enables patients to book appointments with doctors online, 
                  featuring user authentication, role-based dashboards , roles management, and appointment management.
                </Card.Text>

                 <div className="tech-stack">
                  <span className="badgetech">HTML</span>
                  <span className="badgetech ms-1">CSS</span>
                  <span className="badgetech ms-1">Javascript</span>
                  <span className="badgetech ms-1">Boothstrap</span>
                  <span className="badgetech ms-1">React JS</span>
                </div>
                 <div className="tech-stack">
                  <span className="badgetech ms-1">Node JS</span>
                  <span className="badgetech ms-1">Express</span>
                  <span className="badgetech ms-1">MongoDB</span>
                </div>

                <div className="d-flex gap-3 project-btns">
                  <Button className="btn-orange" href="https://github.com/SnehalSMRamteke/mern-doc-appointment-sys-client" target="_blank">GitHub</Button>
                  {/* <Button variant="outline-light livedemoBtn">Live Demo</Button> */}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="code-box">
            <img src={doctorApp} alt="dashDoc" width="630px" className="img-fluid" />
          </Col>
        </Row>

        {/* PROJECT 3 */}
        <Row className="align-items-center mb-5 mt-3">
          <Col md={6}>
            <Card className="project-card">
              <Card.Body>
                <Card.Title className="text-light">Task Management System</Card.Title>
                <Card.Text>
                  A Task management system with role-based access, authentication, CRUD functionality with tasks assignments to different users.
                </Card.Text>

                <div className="tech-stack">
                  <span className="badgetech">HTML</span>
                  <span className="badgetech ms-1">CSS</span>
                  <span className="badgetech ms-1">Javascript</span>
                  <span className="badgetech ms-1">Boothstrap</span>
                  <span className="badgetech ms-1">React JS</span>
                </div>
                 <div className="tech-stack">
                  <span className="badgetech ms-1">Node JS</span>
                  <span className="badgetech ms-1">Express</span>
                  <span className="badgetech ms-1">MySql</span>
                  <span className="badgetech ms-1">Sequelize</span>
                </div>

                <div className="d-flex gap-3 project-btns">
                  <Button className="btn-orange" href="https://github.com/SnehalSMRamteke/task_manage_client" target="_blank">GitHub</Button>
                  {/* <Button variant="outline-light livedemoBtn">Live Demo</Button> */}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="code-box">
            <img src={taskManage} alt="dashTaskmang" width="630px" className="img-fluid"/>
          </Col>
        </Row>

        {/* PROJECT 4 (REVERSED) */}
        <Row className="align-items-center mb-5 flex-row-reverse mt-3">
          <Col md={6}>
            <Card className="project-card">
              <Card.Body>
                <Card.Title className="text-light">FoodMart Application</Card.Title>
                <Card.Text>
                 A React.js-based food ordering application featuring categorized food listings with search and filter functionality for an enhanced user experience.
                  The app allows users to easily browse food items by category, apply filters, and quickly find products through real-time search for seamless food discovery.
                </Card.Text>

                 <div className="tech-stack">
                  <span className="badgetech">HTML</span>
                  <span className="badgetech ms-1">CSS</span>
                  <span className="badgetech ms-1">Javascript</span>
                  <span className="badgetech ms-1">Boothstrap</span>
                  <span className="badgetech ms-1">React JS</span>
                </div>
                 <div className="tech-stack">
                  <span className="badgetech ms-1">Node JS</span>
                  <span className="badgetech ms-1">Express</span>
                </div>

                <div className="d-flex gap-3 project-btns">
                  <Button className="btn-orange" href="https://github.com/SnehalSMRamteke/foodMart-react" target="_blank">GitHub</Button>
                  <Button variant="outline-light livedemoBtn" href="https://food-mart-kulfi-c10156.netlify.app/" target="_blank">Live Demo</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="code-box">
            <img src={foodmart} alt="dashfoodmart" width="630px" className="img-fluid"/>
          </Col>
        </Row>

        {/* PROJECT 5 */}
        <Row className="align-items-center mb-5 mt-3">
          <Col md={6}>
            <Card className="project-card">
              <Card.Body>
                <Card.Title className="text-light">People's Directory</Card.Title>
                <Card.Text>
                  A React.js-based People’s Directory application that manages users data .
                   The application supports search, filters, and full CRUD operations (Create, Read, Update, Delete) to efficiently manage and organize people records.
                </Card.Text>

                <div className="tech-stack">
                  <span className="badgetech">HTML</span>
                  <span className="badgetech ms-1">CSS</span>
                  <span className="badgetech ms-1">Javascript</span>
                  <span className="badgetech ms-1">Boothstrap</span>
                  <span className="badgetech ms-1">React JS</span>
                </div>
                 <div className="tech-stack">
                  <span className="badgetech ms-1">Node JS</span>
                  <span className="badgetech ms-1">Express</span>
                </div>

                <div className="d-flex gap-3 project-btns">
                  <Button className="btn-orange" href="https://github.com/SnehalSMRamteke/people_directory_react" target="_blank">GitHub</Button>
                  <Button variant="outline-light livedemoBtn" href="https://people-co-inquisitive-panda.netlify.app/" target="_blank">Live Demo</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="code-box">
            <img src={peoplediectory} alt="dashpeople" width="630px" className="img-fluid"/>
          </Col>
        </Row>


      </Container>
    </section>
  );
}
