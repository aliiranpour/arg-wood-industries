import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Home_slider from '../../components/Home_slider/Home_slider';
import GoftinoWidget from '../../components/Chatwidget/Chatpart';
import BestProduct from '../../components/Best_products/Best_products';
import galleryData from '../gallary/galleryData';

const Home = () => {
  return (
    <Container>
      <Row>
        <Home_slider />
      </Row>
      <Col>
        <Row className=' mt-5'>
          <h3 className=' border-bottom mb-4 pb-4'> محصولات پرفروش </h3>
        </Row>
        
          <BestProduct products={galleryData} />  
        
      </Col>
      <GoftinoWidget />
    </Container>
  )
}

export default Home;