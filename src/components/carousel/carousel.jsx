import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../../assets/Promotion1.jpg'
import Image2 from '../../assets/Promotion2.jpg'
// import Image3 from '../../assets/Card_Promotion White RTX 4060.png'

const CarouselComponent = () => {
  return (
    <>
       <div className="container" style={{ width: "90%", maxWidth: "1800px", maxHeight: "800px !important" }}>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false} showThumbs={false}>
        <div>
          <img src={Image1} alt="Image 1" style={{ width: "100%", height: "auto" }} />
        </div>
        <div>
          <img src={Image2} alt="Image 2" style={{ width: "100%", height: "auto" }} />
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default CarouselComponent;