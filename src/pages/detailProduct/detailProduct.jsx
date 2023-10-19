import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogin from '../../components/navbarLogin';
import Image from '../../assets/GraphicCard.jpg'
const Product = () => {
  return (
    <>
    <NavbarLogin />
    <div className="container" style={{ marginTop: 120 }}>
      <div className="row">
        <div className="col-md-3">
          <img
            style={{ width: 367, height: 378, objectFit: 'cover' }}
            src={Image}
            alt="Product"
          />
        </div>
        <div className="col-md-8 wrapRight" style={{marginLeft : 90}}>
          <h4>Product Name</h4>
          <h6 style={{ color: "#9B9B9B" }}>Store Name</h6>
          <img src="" alt="Rating" />
          <div style={{ marginTop: 20 }}>
            <h6>Price</h6>
            <h5 style={{ fontWeight: "bold" }}>Product Price</h5>
          </div>
          <div style={{ marginTop: 20, width: 20 }}>
            <h6>Color</h6>
            <div className="wrapColor">
              <button className={`color`}>Color 1</button>
              <button className={`color selected`}>Color 2</button>
            </div>
          </div>
          <div style={{ marginTop: 10, width: 20 }}>
          </div>
          <div className="d-flex" style={{ marginTop: 20 }}>
            <h6>Jumlah</h6>
          </div>
          <div className="d-flex">
            <div className="input-group">
              <button className="btn btn-outline-secondary">-</button>
              <input
                type="text"
                value="1"
                readOnly
                style={{
                  width: 50,
                  margin: "0 5px",
                  textAlign: "center",
                  border: "none",
                }}
              />
              <button className="btn btn-outline-secondary">+</button>
            </div>
          </div>
          <div className="d-flex wrapButton" style={{ marginTop: 30 }}>
            <button type="button" className="btn rounded-pill chat">
              <h6 className="login">Chat</h6>
            </button>
            <button
              type="button"
              className="btn rounded-pill bag"
            >
              <h6 className="login">Add Bag</h6>
            </button>
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn rounded-pill buy"
              >
                <h6 className="login">Buy Now</h6>
              </button>
            </Link>
          </div>
        </div>
        <h4 style={{ marginTop: 60 }}>Product Information</h4>
        <h6 style={{ marginTop: 30 }}>Description</h6>
        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis viverra nibh cras pulvinar mattis. Massa sed elementum tempus egestas. Semper eget duis at tellus at urna. Non arcu risus quis varius quam quisque id. Adipiscing bibendum est ultricies integer. Tempus urna et pharetra pharetra massa massa ultricies mi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Pharetra vel turpis nunc eget. Nibh ipsum consequat nisl vel pretium lectus quam id. Sed risus pretium quam vulputate dignissim suspendisse in. Est velit egestas dui id. Etiam tempor orci eu lobortis elementum nibh tellus. Dolor morbi non arcu risus quis varius. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Augue neque gravida in fermentum et sollicitudin ac orci. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Quis blandit turpis cursus in hac habitasse. Pulvinar mattis nunc sed blandit. Nunc sed velit dignissim sodales ut eu.</p>
      </div>
    </div>
    </>
  );
};

export default Product;
