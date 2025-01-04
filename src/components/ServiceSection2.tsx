import React from "react";
import { Link } from "react-router-dom";
import Product1 from "../resources/Product1.jpg";
import Product2 from "../resources/Product2.jpg";
import Product3 from "../resources/Product3.jpg";
import Product4 from "../resources/Product4.jpg";
import Product5 from "../resources/Product5.jpg";
import Product6 from "../resources/Product6.jpg";

const services = [
  {
    title: "High-Tensile High-Quality Mesh Mesh",
    description:
      "Window and door screening to meet your needs for the best view, airflow, tiny insect protection, pet resistance or durability.  Choose from the largest selection of window and door screening products in the market.",
    link: Product1,
    nav: "/products/product1",
  },
  {
    title: "Patio and Enclosures Mesh",
    description:
      "SheerWeave interior sun control fabrics provide the perfect balance of light, comfort and beauty, making them the ideal window covering solution for residential and commercial spaces.",
    link: Product2,
    nav: "/products/product2",
  },
  {
    title: "Hurricane Protection Screens",
    description:
      "Choosing insect screening is easy with Phifer leading the way. Tell us a little bit about your needs, and we’ll recommend some top-quality products for you.",
    link: Product3,
    nav: "/products/product3",
  },
  {
    title: "Fiberglass Visible Pet Mesh",
    description:
      "Window and door screening to meet your needs for the best view, airflow, tiny insect protection, pet resistance or durability.  Choose from the largest selection of window and door screening products in the market.",
    link: Product4,
    nav: "/products/product4",
  },
  {
    title: "Perforated Aluminum Mesh",
    description:
      "SheerWeave interior sun control fabrics provide the perfect balance of light, comfort and beauty, making them the ideal window covering solution for residential and commercial spaces.",
    link: Product5,
    nav: "/products/product5",
  },
  {
    title: "Curtain Wall And Outside Mesh",
    description:
      "Choosing insect screening is easy with Phifer leading the way. Tell us a little bit about your needs, and we’ll recommend some top-quality products for you.",
    link: Product6,
    nav: "/products/product6",
  },
];

function ServicesSection2() {
  return (
    <div className="py-12 bg-gray-100 font-poppins">
      <h2 className="text-4xl text-center font-bold mb-8">OUR PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-4">
        {services.map((service, index) => (
          <Link to={service.nav} key={index}>
            <div
              className="flex flex-col justify-between text-black rounded-md shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105 h-full"
            >
              {/* Image on top with margin */}
              <div className="p-4 overflow-hidden rounded-md">
                <img
                  src={service.link}
                  alt={service.title}
                  className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg"
                />
              </div>

              {/* Content below image */}
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-center lg:text-2xl">
                  {service.title}
                </h3>
                <div className="my-4 h-px bg-blue-800"></div>
                <p className="text-center text-gray-600 lg:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection2;
