import React from 'react';
import background from "../assets/bg-home.jpg"
import Navbar from './Navbar';
import { useStateContext } from '../context/ContextProvider';
import styled from 'styled-components';
import { Cursor, useTypewriter  } from 'react-simple-typewriter';
const HomeTopbar = () => {
    const { currentColor} = useStateContext();
    const[text]=useTypewriter({
      words:["Designer","Front End Developer","Freelancer"],
      loop:{},
      typeSpeed:100,
      deleteSpeed:80,
    });

    const MyHeroBg=styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;

    &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: .7;
    
    }
    `

    const MyCaption=styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    text-align: center;
    width:100%;
    `
    
    const MyName=styled.b`
    color:${currentColor};
    `
    return (
        <div className=" h-100 w-100" id="home" >
            <MyHeroBg style={{ backgroundImage: `url(${background})` }} />
            <Navbar/>
            <MyCaption>
               <h5 className="fw-normal text-light">Welcome</h5>
               <h1 className="fw-light mb-4 text-light">I'm <MyName>Alireza</MyName> Delgarm</h1>
             
              <h4>
                <span style={{fontWeight:"revert-layer",color:currentColor}}>
                    {text}
                </span>
                <span style={{color:currentColor}}>
                    <Cursor cursorStyle="<" />
                </span>
              </h4>
            </MyCaption>
        </div>
    );
};

export default HomeTopbar;