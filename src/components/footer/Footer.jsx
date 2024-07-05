import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.style.css'

const Footer = () => {
  return (
    <Container fluid className='footer-container m-0 p-0'>
      <Row className='d-flex justify-content-between main-footer w-100 pb-5'>
        <Col>
          <Row>
            <h4 className='mb-4 fw-bold'> تیتر 1 </h4>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h4 className='mb-4 fw-bold'> تیتر 2 </h4>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
        </Col>
        <Col>
          <Row>
            <h4 className='mb-4 fw-bold'> تیتر 3 </h4>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
          <Row>
            <p> عنوان 1 </p>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
