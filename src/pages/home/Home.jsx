import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import TopCarousel from '../../components/topCarousel/TopCarousel'
import image1 from '/src/assets/main/students.jpg'
import image2 from '/src/assets/main/homeScreen.svg'
import StateCount from '../../components/stateCount/StateCount'
import FooterMain from '../../components/footerMain/FooterMain'
import FooterBasic from '../../components/footerBasic/FooterBasic'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import HomeBanner from '../../components/homeBanner/HomeBanner'
import './Home.css'
const Home = () => {
  const studentsDetails = [
    {id:0,image: image1 ,name:"Sanvy",stream:"Bio Science",percentage:"68%"},
    {id:1,image: image2 ,name:"Sanvy",stream:"Bio Science",percentage:"68%"},
    {id:2,image: image1 ,name:"Sanvy",stream:"Bio Science",percentage:"68%"},
    {id:3,image: image1 ,name:"Sanvy",stream:"Bio Science",percentage:"68%"},
    {id:4,image: image1 ,name:"Sanvy",stream:"Bio Science",percentage:"68%"}
  ]
  return (
    <div className='home-container'>
       <Navbar/>
       <HomeBanner/>
       <TopCarousel cardDetails={studentsDetails} displayCards={5}/>       
       <NewsLetter/>
       <FooterMain/>
       <FooterBasic/>
    </div>
  )
}

export default Home