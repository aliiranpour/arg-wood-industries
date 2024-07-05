import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Home_slider from '../../components/Home_slider/Home_slider';
import GoftinoWidget from '../../components/Chatwidget/Chatpart';
import BestProduct from '../../components/Best_products/Best_products';
import galleryData from '../gallary/galleryData';
import Why_arg from '../../components/Why-arg/Why-arg';
import Cooperation from '../../components/Cooperation/Cooperation';
import Kind_of_stone_home_page from '../../components/kind_of_stone_home_page/Kind_of_stone_home_page';

const Home = () => {
  return (
    <Container>
      <Row>
        <Home_slider />
      </Row>
      <Row>
        <Kind_of_stone_home_page />
      </Row>
      <Row>
        <Row>
          <BestProduct products={galleryData} />  
        </Row>
      </Row>
      <Row>
        <Why_arg />
      </Row>
      <Row>
        <Cooperation />
      </Row>
      <GoftinoWidget />
    </Container>
  )
}

export default Home;