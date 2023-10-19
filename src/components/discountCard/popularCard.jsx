import React, { useState, useEffect } from "react";
import axios from 'axios';
import {GrLinkNext , GrLinkPrevious} from 'react-icons/gr'

const DiscountCard = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/products?page=${currentPage}&limit=${itemsPerPage}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
          setTotalPages(response.data.pagination.totalPage);
        } else {
          console.error('API response is not in the expected format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="title" style={{ marginTop: 30, marginBottom: 30 }}>
        <h1 style={{ fontWeight: "bold" }}>Products</h1>
        <section style={{ color: "#9B9B9B" }}>New Coming Products This Week</section>
        {products.map((product, index) => (
          <div className="card" style={{ width: "400px" }} key={index}>
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">
              </p>
              <p className="card-price">Rp {product.price}</p>
              <p className="card-description">{product.description}</p>
              <p className="card-color">{product.color}</p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
              <a href="#" className="btn btn-primary">
                Add To Cart
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <GrLinkPrevious />
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default DiscountCard;
