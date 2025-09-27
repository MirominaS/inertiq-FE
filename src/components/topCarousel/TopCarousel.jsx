import React, { useEffect, useRef } from "react";
import Card from "../card/Card";
import image1 from "/src/assets/main/students.jpg";
import "./TopCarousel.css";
import { FaAward } from "react-icons/fa6";

const TopCarousel = ({
  cardDetails = [
    { id: 0, image: image1, name: "", stream: "", percentage: "" },
  ], 
  displayCards = 5
}) => {
  const carouselContainer = useRef();
  var movement = 0;
  var cardCount = cardDetails.length;
  var cardWidth = (100/displayCards);
  
  setInterval(() => {
    carouselContainer.current.style.transitionDuration = "0.5s";
    movement += cardWidth;
    if (movement === cardWidth * cardCount) { //cardWidth * cardCount = total cards' width
      movement = 0;
      carouselContainer.current.style.transitionDuration = "0s";
    }
    carouselContainer.current.style.transform = `translateX(-${movement}vw)`;
  }, 2000);

  return (
    <div className="top-carausel">
      <div className="top-carousel-title">
        This Week - No 1 &nbsp; &nbsp;
        <FaAward style={{color:"gold"}} />
      </div>
      <div
        className="top-carousel-container"
        style={{ width: `${cardWidth * (cardCount + displayCards)}vw` }}
        ref={carouselContainer}
      >
        {cardDetails
          .concat(cardDetails.slice(0, displayCards)) // card details + concat array
          .map((cardDetail, index) => (
            <Card
              key={index}
              image={cardDetail.image}
              studentName={cardDetail.name}
              stream={cardDetail.stream}
              percentage={cardDetail.percentage}
            />
          ))}
      </div>
    </div>
  );
};

export default TopCarousel;
