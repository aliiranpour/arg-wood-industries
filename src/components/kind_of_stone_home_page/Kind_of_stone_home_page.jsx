import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Kind_of_stone_home_page.style.css';
import Kind_of_stones from './kind_of_stone_list';

const Kind_of_stone_home_page = () => {
  const navigate = useNavigate();

  const handleStoneClick = (title) => {
    navigate('/products', { state: { selectedCategory: title } });
  };

  return (
    <Container className='my-5'>
      <Row className="align-items-center justify-content-center title-row my-5">
        <Col className="line-col"><div className="line"></div></Col>
        <Col xs="auto" className="text-col"><h3 className="title">انواع سنگ ها</h3></Col>
        <Col className="line-col"><div className="line"></div></Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        {Kind_of_stones.map((stone) => (
          <Col key={stone.id} md={3} className="stone-col">
            <div className="stone-item" onClick={() => handleStoneClick(stone.title)}>
              <img src={stone.img} alt={stone.title} className="stone-image" />
              <div className="stone-overlay">
                <div className="stone-title">{stone.title}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Kind_of_stone_home_page;
