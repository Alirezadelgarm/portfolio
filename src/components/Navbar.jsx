
import React,{ useRef,useState } from "react";
import styled from 'styled-components';
import { useStateContext } from '../context/ContextProvider';
const MyHeader=styled.header`
display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem;
  color: #fff;
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%;

  
nav a {
  margin: 0 2rem;
  color: #fff;
  text-decoration: none;
  opacity:.7;
}

nav a:hover {
opacity:1;

}

.nav-btn {
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  font-size: 1.8rem;
}


div,nav {
  display: flex;
  align-items: center;
}


@media only screen and (max-width: 1024px) {
  .nav-btn {
	  visibility: visible;
	  opacity: 1;
  }

  nav {
	  position: fixed;
	  top: 0;
	  left: 0;
	  height: 30%;
	  width: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  gap: 1rem;
	  background-color: #000;
	  transition: 1s;
	  transform: translateY(-100vh);
  }

  .responsive_nav {
	  transform: none;
  }

  nav .nav-close-btn {
	  position: absolute;
	  top: 5px;
	  right: 20px;
	  font-size:25px;
  }

  nav a {
	  font-size: 1rem;
  }
}
`

const Navbar=()=> {
    const { currentColor } = useStateContext();

	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const [color,setColor]=useState("")
      const changesColor=()=>{
	      if(window.scrollY>=200){
	          setColor("#000");
	      }else{
	          setColor("");
	      }
	  };
	  window.addEventListener("scroll",changesColor);

	return (
		<MyHeader style={{backgroundColor:color}} >

			<h3 style={{color:currentColor}}>Folio</h3>
			<nav ref={navRef}>
				<a href="#home">Home</a>
				<a href="#ABOUT ME">About Me</a>
				<a href="#skills">My Skills</a>
				<a href="#Portfolio">Portfolio</a>
				<a href="#Contact">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<i class="bi bi-x-lg"></i>
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
             <i class="bi bi-list"></i>
			</button>
		
		</MyHeader>
	);
}

export default Navbar;