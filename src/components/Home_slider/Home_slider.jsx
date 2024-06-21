import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/image/slider1.jpg'
import slider2 from '../../assets/image/slider2.jpg'
import slider3 from '../../assets/image/slider3.jpg'
import './Home_slider_image.style.css'


function Home_slider() {
  return (
    <Carousel>
      <Carousel.Item className='home-slider'>
        <img src={slider1} className='home-slider-image' text="First slide" />

      </Carousel.Item>
      <Carousel.Item className='home-slider'>
        <img src={slider2} className='home-slider-image' text="Second slide" />

      </Carousel.Item>
      <Carousel.Item className='home-slider'>
        <img src={slider3} className='home-slider-image' text="Third slide" />

      </Carousel.Item>
    </Carousel>
  );
}

export default Home_slider;