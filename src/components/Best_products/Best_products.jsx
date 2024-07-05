import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import './BestProduct.style.css';
import { Container, Row , Col } from 'react-bootstrap';

const BestProduct = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 1 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

  return (
    <Container>
      <Row className="align-items-center title-row my-5">
        <Col className="line-col"><div className="line"></div></Col>
        <Col xs="auto" className="text-col"><h3 className="title">محصولات پرفروش</h3></Col>
        <Col className="line-col"><div className="line"></div></Col>
      </Row>
      <Carousel 
        autoPlay={true} 
        responsive={responsive} 
        ssr={true} 
        infinite={true} 
        keyBoardControl={true} 
        containerClass="carousel-container" 
        removeArrowOnDeviceType={["mobile"]} 
        dotListClass="custom-dot-list-style" 
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className=' text-decoration-none'>
            <div className=" carousel-items w-75" > 
              <div className='carousel-image'>
                <img
                  className="d-block w-100 p-2"
                  src={product.img}
                  alt={product.title}
                />
              </div>
              <div>
                <h3 className="carousel-captions">{product.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </Container>
  );
};

export default BestProduct;
