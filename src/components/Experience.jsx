import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineExclamation } from 'react-icons/ai'
import { BiDotsVertical } from 'react-icons/bi'
import { GrNode, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive2 } from 'react-icons/im'
import { IoLogoNodejs } from 'react-icons/io'
import { PiDotOutlineFill } from 'react-icons/pi'
import { RiBootstrapLine } from 'react-icons/ri'
import { RxBorderDashed, RxDividerVertical } from 'react-icons/rx'
import { TbBrandCss3, TbBrandMongodb, TbMinusVertical } from 'react-icons/tb'

export const Experience = () => {
  return (
    <>
      <section className="sectionExp" id="experience">
      <Container>
        <Row className='text-center '>
            <Col> <h2>Experience</h2>
                {/* <AiOutlineExclamation size={60} color='#b36354' /> */}
            
            </Col>
        </Row>
        <Row>
          <Col >
          <div className='expdiv'>
            {/* <RxBorderDashed size={60} /> */}
            {/* <BiDotsVertical size={60} /> */}
            {/* <RxDividerVertical size={60} /> */}
            {/* <PiDotOutlineFill size={60} /> */}

            <div>
                <h3>Internship :</h3>
                <h4>Internship at Wisdom Sprouts</h4>
                <div className='pt-2'>
                  <p>
                     Worked as a MERN Developer Intern, contributing to the development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                  Built APIs, developed responsive UI components using Boothstrap , CSS , HTML , implemented authentication, and collaborated with a team .
                  
                  </p>
                 
                  </div>
               
                <div className='pt-2'>
                  <ImHtmlFive2  color="#de4923"  size={30} className='me-2' />  
                  <TbBrandCss3 color="#0b6db3" size={38} className='me-2' />   
                  <IoLogoNodejs color="#ceb32f" size={35} className='me-2' />  
                  <RiBootstrapLine color="#8814f5" size={35} className='me-2' />      
                  <GrReactjs color="#00d5f7" size={30} className='me-2' />   
                  <GrNode color="#7fc728" size={30} className='me-2' />   
                  <TbBrandMongodb color="#69a746" size={35} className='me-2' />   
                
                </div>
            </div>


          </div>
          <div className='expdiv2 mt-2'>
            
           <pre> </pre>
          </div>
            {/* <ul className="services">
              <li>Website Development</li>
              <li>App Development</li>
              <li>Website Hosting</li>
            </ul> */}
            {/* <img src="\src\assets\gradient-metaverse-illustration_23-2149265633edit.png" alt="about" width={600}
            className="p-3" /> */}
          </Col>

        </Row>
      </Container>
    </section>
    </>
  )
}
