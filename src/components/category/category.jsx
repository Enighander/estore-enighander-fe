import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./category.css";

const CategoryComponent = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .then((response) => {
        setDataCategory(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const itemsPerGroup = 5;
  const groupedData = [];
  for (let i = 0; i < dataCategory.length; i += itemsPerGroup) {
    groupedData.push(dataCategory.slice(i, i + itemsPerGroup));
  }

  

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
          {groupedData.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <div className="row">
                {group.map((item) => (
                  <div
                    key={item.id} // Add a unique "key" prop to each child element
                    className="col col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                  >
                    <Link to={`/products/categories/${item.id}`}>
                      <div className="border rounded">
                        <img
                          className="img"
                          src={item.image}
                          alt={`Category ${item.id}`} // Add an "alt" attribute for accessibility
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CategoryComponent;
