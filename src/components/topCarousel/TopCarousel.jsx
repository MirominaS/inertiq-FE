import React, { useEffect, useRef } from 'react'
import Card from '../card/Card'
import image1 from '/src/assets/main/students.jpg'
import './TopCarousel.css'

const TopCarousel = ({cardDetails=[ {id:0,image: image1 ,name:"",stream:"",percentage:""}]}) => {
  const carouselContainer = useRef()
  var movement = 0;
  useEffect(() => {      
      
   },[]) 
   
   setInterval(() =>{
        carouselContainer.current.style.transitionDuration = "0.5s"
        console.log("sss", movement)
        movement += 33;
        if (movement === 33*cardDetails.length ) {
          movement = 0;
          carouselContainer.current.style.transitionDuration = "0s"
        }
        carouselContainer.current.style.transform = `translateX(-${movement}vw)`;
      },2000)
    
 

  return (
    <div className='top-carousel-container' style={{width:`${33*(cardDetails.length+3)}vw`}} ref={carouselContainer}>
        {
          cardDetails.concat(cardDetails.slice(0,3)).map((cardDetail,index) => 
              <Card 
                key={index}
                image={cardDetail.image} 
                studentName={cardDetail.name} 
                stream={cardDetail.stream} 
                percentage={cardDetail.percentage}
              />
          )
        }
    </div> 
  )
}

export default TopCarousel