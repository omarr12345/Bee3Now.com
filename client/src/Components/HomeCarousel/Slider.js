import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./edit.css";

const data = [
  {
    image: require("../../Assets/slider4.png"),
    caption: "Caption",
    description: "Description Here",
    id: 1,
  },
  {
    image: require("../../Assets/slider3.jpg"),
    caption: "Caption",
    description: "Description Here",
    id: 2,
  },
  {
    image: require("../../Assets/slider2.jpg"),
    caption: "Caption",
    description: "Description Here",
    id: 3,
  },
];

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  {
    return (
      <div className="container home-carousel">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel"
        >
          {data.map((slide, i) => {
            return (
              <Carousel.Item className="carouselItem" key={slide.id}>
                <img
                  className="d-block img-fluid carousel-img"
                  src={slide.image}
                  alt="slider image"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
