import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Home_slider from '../../components/Home_slider/Home_slider';
import GoftinoWidget from '../../components/Chatwidget/Chatpart';
import BestProduct from '../../components/Best_products/Best_products';
import galleryData from '../gallary/galleryData';
import Why_arg from '../../components/Why-arg/Why-arg';

const Home = () => {
  return (
    <Container>
      <Row>
        <Home_slider />
      </Row>
      <Row>
        <Row className=' mt-5'>
          <h3 className=' border-bottom mb-4 pb-4'> محصولات پرفروش </h3>
        </Row>
        <Row>
          <BestProduct products={galleryData} />  
        </Row>
      </Row>
      <Row>
        <Why_arg />
      </Row>
      <GoftinoWidget />
    </Container>
  )
}

export default Home;