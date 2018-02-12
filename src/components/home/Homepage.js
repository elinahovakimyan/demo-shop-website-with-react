import React from 'react';
import { Carousel } from 'react-bootstrap';

const Homepage = () => {
  return(
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/online.jpg" className="carouselImg" />
        <Carousel.Caption>
          <h2>Do the hard work online with us!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/happier.jpg" className="carouselImg" />
        <Carousel.Caption>
          <h2>Multiply The Happy moments of your life.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/assets/easier.jpg" className="carouselImg" />
        <Carousel.Caption>
          <h2>Make the shopping easier and faster!</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export { Homepage };
