import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../context/ContextProvider';

const ItemPortfolio = ({ name, category,imgSrc,githubSrc}) => {
  const { currentColor} = useStateContext();

  
  const MyPortfolioInfo=styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    display: block;
    content: "";
    width: 48px;
    height: 48px;
    position: absolute;
    top: 35px;
    left: 35px;
    border-top: 3px solid  ${currentColor};
    border-left: 3px solid  ${currentColor};
    transition: all 0.5s ease 0s;
    z-index: 9994;
  }
  
  &::after {
    display: block;
    content: "";
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 35px;
    right: 35px;
    border-bottom: 3px solid  ${currentColor};
    border-right: 3px solid  ${currentColor};
    transition: all 0.5s ease 0s;
    z-index: 9994;
  }
  `
  
    const MyPortfolioWrap=styled.div`
      transition: 0.3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      background: rgba(69, 80, 91, 0.8);
  
      &::before{
      content: "";
      background: rgba(255, 255, 255, 0.7);
      position: absolute;
      left: 30px;
      right: 30px;
      top: 30px;
      bottom: 30px;
      transition: all ease-in-out 0.3s;
      z-index: 2;
      opacity: 0;
      }
    &:hover::before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 1;
    }
  
    &:hover ${MyPortfolioInfo}{
      opacity: 1;
    }
  
    &:hover ${MyPortfolioInfo}::before{
      top: 15px;
      left: 15px;
    }
  
    
    &:hover ${MyPortfolioInfo}::after{
      bottom: 15px;
      right: 15px;
    }
    `

  const MyName=styled.h4`
    font-size: 20px;
    color: #45505b;
    font-weight: 600;
  `
  const MyCategory=styled.p`
  color:${currentColor};
  background-color: #45505b;
  font-size: 14px;
  text-transform: uppercase;
  padding: 4px;
  border-radius: 4px;
  margin: 0;
  `
  
  const MyLink=styled.a`
  color: #535a62;
  margin: 0 2px;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;

  &:hover {
    color: ${currentColor};
  }
  `
    return (

        <>
        <div className="col p-5 px-sm-2 py-sm-5 overflow-hidden " >
        <MyPortfolioWrap>
              <img src={imgSrc} className="img-fluid w-100 h-100 rounded-2" alt=""  />
              <MyPortfolioInfo>
                <MyName>{name}</MyName>
                <MyCategory>{category}</MyCategory>
                <MyLink href={`https://github.com/Alirezadelgarm/${githubSrc}`} target={'_blank'} ><i className="bi bi-github"></i></MyLink>
              </MyPortfolioInfo>
        </MyPortfolioWrap>

        

        </div>


        </>

    );
};

export default ItemPortfolio;