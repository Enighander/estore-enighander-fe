import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../../assets/Card_Promotion RTX 4060 Ti.png'
import Image2 from '../../assets/Card_Promotion RTX 4060.png'
import Image3 from '../../assets/Card_Promotion White RTX 4060.png'

const CarouselComponent = () => {
  return (
    <>
    <div className="container" style={{ width: 500, maxWidth: "100%" }}>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false} showThumbs={false}>
        <div className="container">
          <img src={Image1} alt="Image 1" />
        </div>
        <div>
          <img src={Image2} alt="Image 2" />
        </div>
        <div className="container">
          <img src={Image3} alt="Image 3" />
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default CarouselComponent;