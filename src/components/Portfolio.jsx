import React, {useState } from "react";
import ItemPortfolio from "./ItemPortfolio";
import SectionTitle from "./SectionTitle";
import skillImg from "../assets/js1.png"
import skillImg1 from "../assets/js2.png"
import skillImg2 from "../assets/js3.png"
import skillImg3 from "../assets/js4.png"
import skillImg4 from "../assets/js5.png"
import skillImg5 from "../assets/react1.png"
import skillImg6 from "../assets/react2.png"
import skillImg7 from "../assets/react3.png"
import skillImg8 from "../assets/react4.png"


import { useStateContext } from '../context/ContextProvider';
import styled from "styled-components"
const Portfolio = () => {
  const { currentColor,currentMode} = useStateContext();


    
  const portfolioValue = [
    {id:1, name: "music player", category: "Bootstrap" ,imgSrc:skillImg,githubSrc:"musicplayer"},
    {id:2, name: "QR code", category: "JavaScript" ,imgSrc:skillImg1,githubSrc:"QRcode"},
    {id:3, name: "todolist", category: "Bootstrap" ,imgSrc:skillImg2,githubSrc:"todolist"},
    {id:4, name: "alarmclock", category: "JavaScript" ,imgSrc:skillImg3,githubSrc:"alarmclock"},
    {id:5, name: "Weatherapp", category: "JavaScript", imgSrc:skillImg4,githubSrc:"Weatherapp"},
    {id:6, name: "react form", category: "React", imgSrc:skillImg5,githubSrc:"react-form"},
    {id:7, name: "shopping cart", category: "React", imgSrc:skillImg6,githubSrc:"shopping-cart-redux"},
    {id:8, name: "cryptocurrency ", category: "React", imgSrc:skillImg7,githubSrc:"cryptocurrency"},
    {id:9, name: "portfolio", category: "React", imgSrc:skillImg8,githubSrc:"portfolio"},

  ];

  const [selectedCategory, setSelectedCategory] = useState();

  function getFilteredList() {
    if (!selectedCategory) {
      return portfolioValue;
    }
    return portfolioValue.filter((item) => item.category === selectedCategory);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const MyButton=styled.button`
  padding: 8px 15px;
  cursor: pointer;
  border: none ;
  outline: none;
  color:${currentColor};
  

  &:not(:first-child){
    border-left: 1px solid silver;
}

&:hover{
    background-color:${currentColor};
    color: white;
    transition: .3s;
}

  `


  const MyCategoryDiv=styled.div`
  display: flex;
  border-radius: 20px 20px;
  overflow: hidden;
  
  `
  return (
    <>
    <section className="py-5 overflow-hidden " id='Portfolio' style={{backgroundColor:currentMode === 'Dark' ? '#000' : '#f3f5fa'}} >
    <div className='mb-5 ' ></div>

         <div className="container ">
            <SectionTitle content="PORTFOLIO"  />
                <div className="row justify-content-center ">
                    <div className="col p-2  justify-content-center d-flex ">
                    <MyCategoryDiv>
                        <MyButton value="" onClick={handleCategoryChange}>All</MyButton>
                        <MyButton value="React" onClick={handleCategoryChange} >React</MyButton>
                        <MyButton value="JavaScript" onClick={handleCategoryChange} >JavaScript</MyButton>
                        <MyButton value="Bootstrap" onClick={handleCategoryChange}>Bootstrap</MyButton>
                    </MyCategoryDiv>
                    

                    </div>


                </div>
                <div className="row py-5  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5 g-md-4">
                
        {getFilteredList().map((element) => (
          <>
          <ItemPortfolio {...element} key={element.id} />
          
          
          </>
        ))}
      
                </div>
            </div>
         
    </section>
   
    </>
  );
};

export default Portfolio;