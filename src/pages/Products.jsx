import React from "react";

import stove1 from "../assets/images/stove1.jpeg";
import stove2 from "../assets/images/stove2.jpeg";
import stove3 from "../assets/images/stove3.jpg";
import stove4 from "../assets/images/stove4.jpg";

const Products = () => {

  const products = [
    {
      name: "Single Burner Steam Stove",
      description: "Compact and efficient stove suitable for small kitchens and households.",
      image: stove1,
    },
    {
      name: "Economical Steam Stove KE/U/2015/538",
      model: "Model: KE/U/2015/538",
      description: "Designed for faster cooking with two burners for medium-sized kitchens.",
      image: stove2,
    },
    {
      name: "Commercial Steam Stove",
      description: "Heavy-duty stove designed for restaurants and large-scale cooking operations.",
      image: stove3,
    },
    {
      name: "Institutional Steam Stove",
      description: "Large capacity stove perfect for schools, hospitals, and institutions.",
      image: stove4,
    },
    {
      name: "Industrial Steam Stove",
      description: "High performance stove suitable for factories and industrial kitchens.",
      image: stove4,
    },
    {
      name: "Multi Burner Steam Stove",
      description: "Multiple burner stove designed for high cooking demand environments.",
      image: stove4,
    },
  ];

  return (
    <section className="products-section container">

      <h2 className="products-title">Our Steam Stove Models</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <a
              href={`https://wa.me/254713147392?text=Hello! I want to buy ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button"
            >
              Order via WhatsApp
            </a>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Products;
