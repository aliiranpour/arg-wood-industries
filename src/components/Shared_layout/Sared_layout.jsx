import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import StickyHeader from '../sticky-header/StickyHeader/StickyHeader';

const SharedLayout = () => {
  return (
    <Container fluid dir="rtl">
      <StickyHeader />
      <Row Row={12}>
        <Col className=' content-wrapper'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default SharedLayout;
