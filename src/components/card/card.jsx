import React from "react";
import Image1 from "../../assets/Card_Promotion RTX 4060 Ti.png"

const CardComponent = () => {
  return (
    <div className="container">
      <div className="title" style={{ marginTop: 30, marginBottom: 30 }}>
        <h1 style={{ fontWeight: "bold" }}>New Products</h1>
        <section style={{ color: "#9B9B9B" }}>
          New Coming Products This Weeks
        </section>
        <div className="card" style={{ width: "400px" }}>
          <img className="card-img-top" src={Image1} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Gigabyte RTX 4060 Ti</h4>
            <p className="card-text">
               - Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and full ray tracing <br />
               - 4th Generation Tensor Cores: Up to 4x performance with DLSS 3 vs. brute-force rendering <br />
               - 3rd Generation RT Cores: Up to 2X ray tracing performance <br />
               - Powered by GeForce RTX™ 4060 Ti (16GB) <br />
               - Integrated with 16GB GDDR6 128bit memory interface <br />
               - WINDFORCE cooling system <br />
               - Protection metal back plate <br />
            </p>
            <p className="card-price">Rp 6.000.000 </p>
            <a href="#" className="btn btn-primary">
              Buy
            </a>
            <a href="#" className="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
