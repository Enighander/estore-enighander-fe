import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../assets/GraphicCard.jpg";
import Image2 from "../../assets/Processor.jpg";
import Image3 from "../../assets/MotherBoard.png";
import Image4 from "../../assets/RAM.jpg";
import Image5 from "../../assets/Case.png";
import Skeleton from "react-loading-skeleton";
import "./category.css";

const CategoryComponent = () => {
  return (
    <>
      <div className="container">
        <div className="title" style={{ marginTop: 30, marginBottom: 30 }}>
          <h1 style={{ fontWeight: "bold" }}>Category</h1>
          <section style={{ color: "#9B9B9B" }}>
            What are you currently looking for
          </section>
        </div>
        <Carousel className="row main-slide">
            <div>
                <img src={Image1} alt="VGA"  />
                <Link to={"/vga"} className="legend" style={{backgroundColor : "#009393", color :"white"}}>GraphicCard</Link>
            </div>
            <div>
                <img src={Image2} alt="Processor" />
                <Link to={"/processor"} className="legend" style={{backgroundColor : "#009393", color :"white"}}>Processor</Link>
            </div>
            <div>
                <img src={Image3} alt="MOBO" />
                <Link  to={"/motherboard"} className="legend" style={{backgroundColor : "#009393", color :"white"}}>MotherBoard</Link>
            </div>
            <div>
                <img src={Image4} alt="RAM"  />
                <Link  to={"/memory"} className="legend" style={{backgroundColor : "#009393", color :"white"}}>Memory</Link>
            </div>
            <div>
                <img src={Image5} alt="Case" />
                <Link to={"/case"} className="legend"  style={{backgroundColor : "#009393", color :"white"}}>Case</Link>
            </div>
        </Carousel>
      </div>
    </>
  );
};

export default CategoryComponent;
