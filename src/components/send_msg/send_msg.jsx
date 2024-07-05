import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './send_msg.css'

const Send_msg = () => {
  return (
    <Container className=' mt-5'>
        <Row>
          <Col>
            <Row>
              <label htmlFor="send_msg_name" className='mb-2 mt-3'> نام و نام خانوادگی :</label>
            </Row>
            <Row>
              <input type="text" maxLength="24" id='send_msg_name'/>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <label htmlFor="send_msg_tel" className='mb-2 mt-3'> شماره تلفن:</label>
            </Row>
            <Row>
              <input type="tel" id='send_msg_tel'/>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <label htmlFor="send_msg_email" className='mb-2 mt-3'>ایمیل: </label>
            </Row>
            <Row>
              <input type="email" label='send_msg_email' />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <label htmlFor="send_msg_msg" className='mb-2 mt-3'>پیام: </label>
            </Row>
            <Row>
              <textarea maxLength="120" id='send_msg_msg'/>
            </Row>
          </Col>
        </Row>
    </Container>
  )
}

export default Send_msg