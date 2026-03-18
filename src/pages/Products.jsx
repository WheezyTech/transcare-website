import React from "react";

import stove1 from "../assets/images/stove1.jpeg";
import stove2 from "../assets/images/stove2.jpeg";
import stove3 from "../assets/images/stove3.jpg";
import stove4 from "../assets/images/stove4.jpeg";
import stove5 from "../assets/images/stove5.jpeg";
import stove6 from "../assets/images/stove6.jpeg";

const Products = () => {

  const products = [
    {
      name: "Kolil Economical Steam stove Model: KE/ID/2023/2718",
      description: "Is a model for house hold like nomal jiko. Gloria Chepchumba Bor is the among innovators",
      image: stove1,
    },
    {
      name: "Economical Steam Stove Model: KE/U/2015/538",
      model: "Model: KE/U/2015/538",
      description: "Designed for faster cooking with two burners for medium-sized kitchens.",
      image: stove2,
    },
    {
      name: "MultiKolil Economical Steam Blower Model: KE/P/2019/3340",
      description: "Heavy-duty stove designed for restaurants and large-scale cooking operations.",
      image: stove3,
    },
    {
      name: "Economical Steam Incinerator Model: KE/U/2019/1281",
      description: "Large capacity stove perfect for schools, hospitals, and institutions.",
      image: stove5,
    },
    {
      name: "Economical Corn Cob Briquette Model: KE/U/2019/1282",
      description: "High performance stove suitable for factories and industrial kitchens.",
      image: stove4,
    },
    {
      name: "Multi Burner Steam Stove",
      description: "Multiple burner stove designed for high cooking demand environments.",
      image: stove6,
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
