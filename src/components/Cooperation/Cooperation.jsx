import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Send_msg from '../send_msg/send_msg'
import Coorperation_img from '../../assets/image/Cooperation.png'

const Cooperation = () => {
  return (
    <Container>
      <Row className="align-items-center title-row my-5">
        <Col className="line-col"><div className="line"></div></Col>
        <Col xs="auto" className="text-col"><h3 className="title">همکاری با صنایع سنگ ارگ</h3></Col>
        <Col className="line-col"><div className="line"></div></Col>
      </Row>
        <div className=' w-100'>
            <p className=' mt-3'>
                در صورت تمایل به همکاری با صنایع سنگ ارگ فرم زیر را پر کنید تا با شما تماس بگیریم.
            </p>
            <Row className=' d-flex w-100 justify-content-between'>
                <Col className=' align-content-center h-75'>
                    <Send_msg className=' w-25' />
                </Col>
                <Col className=' d-lg-block d-none'>
                    <img src={Coorperation_img} alt="" className=' w-100' />
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Cooperation