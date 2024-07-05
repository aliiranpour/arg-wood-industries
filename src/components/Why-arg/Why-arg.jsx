import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import quality from '../../assets/image/quality.png'
import price from '../../assets/image/price (2).png'
import support from '../../assets/image/support (2).png'

const Why_arg = () => {
  return (
    <Container>
      <Row className="align-items-center title-row my-5">
        <Col className="line-col"><div className="line"></div></Col>
        <Col xs="auto" className="text-col"><h3 className="title">همکاری با صنایع سنگ ارگ</h3></Col>
        <Col className="line-col"><div className="line"></div></Col>
      </Row>
        <div className=' d-flex gap-5 justify-content-around my-5 flex-shrink-1 flex-wrap'>
                <img className=' w-25' src={quality} alt="" />
                <img src={ price } className=' w-25' alt="" />
                <img src={ support } className=' w-25' alt="" /> 
        </div>
    </Container>
)
}

export default Why_arg