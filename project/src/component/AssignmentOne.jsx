import { useRef } from "react";
import "./Assignmentone.css";

const AssignmentOne = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 2;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    <h1 className="liner">Responsive Card Carousel</h1>
    <div className="container">
    <div className="carousel-container">
      <button onClick={() => scroll("left")} className="carousel-button left">Pre.</button>
      <div ref={carouselRef} className="carousel-track">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="carousel-card">
            Card {index + 1}
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")} className="carousel-button right">Next</button>
    </div>
    </div>
    </>
  );
};

export default AssignmentOne;
