import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import styled from 'styled-components';

const Footer = () => {

    const { currentColor,currentMode} = useStateContext();
   
    const MyFooter=styled.footer`
    background:${currentMode === 'Dark' ? '#33373E' : '#f3f5fa'};
    color:${currentMode === 'Dark' ? '#fff' : '#000'};
    font-size: 14px;
    text-align: center;
    padding: 30px 0;
    `
    const MyName=styled.h3`
    font-size: 36px;
    font-weight: 700;
    position: relative;
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0 0 15px 0;
    `
   const MyCopyrightText=styled.p`
   font-size: 15;
   font-style: italic;
   padding: 0;
   margin: 0 0 40px 0;
   `
   const MyCopyrightContainer=styled.div`
   margin: 0 0 5px 0;
   `
   const MySocialContainer=styled.div`
   margin: 0 0 40px 0;
   `
   const MySocialLink=styled.a`
   font-size: 18px;
   display: inline-block;
   background-color:${currentColor} ;
   color: #fff;
   line-height: 1;
   padding: 8px 0;
   margin-right: 4px;
   border-radius: 50%;
   text-align: center;
   width: 36px;
   height: 36px;
   transition: 0.3s;
   cursor: pointer;

   &:hover{
    transform: translateY(2px);
    color: #fff;
    text-decoration: none;
   }
   `
    return (
        <MyFooter>

        <div className="container">
          <MyName>Alireza Delgarm</MyName>
          <MySocialContainer>
            <MySocialLink href='https://t.me/a0reza' ><i className="bi bi-telegram"></i></MySocialLink>
            <MySocialLink href='https://github.com/Alirezadelgarm' ><i className="bi bi-github"></i></MySocialLink>
            <MySocialLink href='https://www.instagram.com/a0reza' ><i className="bi bi-instagram"></i></MySocialLink>
            <MySocialLink href='https://join.skype.com/invite/lV6kmzBlHbnm' ><i className="bi bi-skype"></i></MySocialLink>
          </MySocialContainer>
          <MyCopyrightContainer>
            <MyCopyrightText className='text-center mb-0 mt-4' > &copy; Copyright 2023. All right reserved | This template is made with <i className="bi bi-suit-heart-fill text-danger"></i></MyCopyrightText>
          </MyCopyrightContainer>
        </div>
        </MyFooter>
    
    );
};

export default Footer;