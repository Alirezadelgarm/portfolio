import React, { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from 'styled-components';
import { useStateContext } from '../context/ContextProvider';
const NavbarB = () => {
        const { currentColor} = useStateContext();
        const [color,setColor]=useState("")
        const changesColor=()=>{
            if(window.scrollY>=200){
                setColor("#000");
            }else{
                setColor("");
            }
        };
        window.addEventListener("scroll",changesColor);



     

     const MyNavbar=styled(Navbar)`
    background-color: transparent;
    background-color:${color};
    padding: 10px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    transition:  0.32s ease-in-out;
    transition: all 0.5s;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
     `
    
   
const MyLink=styled.a`
    font-weight: 400;
    color: #fff !important;
    letter-spacing: 0.8px;
    padding: 0 25px;
    font-size: 18px;
    opacity: 0.75;
    text-decoration: none;
    width: fit-content;
    &:hover{
      opacity: 1;
      color:${currentColor} !important;
      
    }

`
    return (
        <>
    <MyNavbar  collapseOnSelect expand="lg"  variant="dark">
      <Container>
      <Navbar.Brand href="#home" style={{color:currentColor}} >Folio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"   >
          <Nav className="ms-auto ">
            <MyLink href="#home"  >Home</MyLink>
            <MyLink href="#ABOUT ME"  >About Me</MyLink>
            <MyLink href="#skills"  >My Skills</MyLink>
            <MyLink href="#Portfolio"  >Portfolio</MyLink>
            <MyLink href="#Contact"  >Contact</MyLink>
          </Nav>   
        </Navbar.Collapse>
      </Container>
     </MyNavbar>
        </>
    );
};

export default NavbarB;