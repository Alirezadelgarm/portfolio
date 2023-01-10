import React from 'react';
import personImg from "../assets/me.jpg"
import skillImg from "../assets/2.webp"
import Progress from './Progress';
import background from "../assets/bg_banner.jpg"
import SkillItem from './SkillItem';
import SectionTitle from './SectionTitle';
import { useStateContext } from '../context/ContextProvider';
import styled from "styled-components";
const AboutTopbar = () => {
    const { currentColor,currentMode} = useStateContext();

    const BlobContainer=styled.div`
    width: 400px;
    height: 400px;
    overflow: unset;
    position: relative;
    `
    const Bg=styled.div`
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100%;
    `
    const Blob=styled.div`
    
    width: 360px;
    height: 360px;
    border-radius:70% 30% 30% 70% / 60% 40% 60% 40%;
    background-color: ${currentColor};
    background-image: linear-gradient(19deg,  ${currentColor} 0%, rgba(0,0,0,.9)  100%);
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    position: absolute;
    top: 20px; left: 20px;
    `
   const BlobImg=styled.img`
    width:200px;
    height:200px;
    border-radius:70% 30% 30% 70% / 60% 40% 60% 40%;
    position: absolute;
    top: 80px;
    left: 90px;
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
    
@keyframes up-down {
    0% {
      transform: translateY(10px);
    }
  
    100% {
      transform: translateY(-10px);
    }
  }
  
    `
  const progressItemData=[
    {id:1, caption:"HTML + CSS", score:"95%", widthNum:"95%"},
    {id:2, caption:"JavaScript", score:"90%", widthNum:"90%"},
    {id:3, caption:"React" ,score:"90%", widthNum:"90%"},
    {id:4, caption:"TypeScript", score:"75%", widthNum:"75%"},
    {id:5, caption:"Bootstrap", score:"85%", widthNum:"85%"},
    {id:6, caption:"Sass" ,score:"80%", widthNum:"80%"},
    {id:7, caption:"MUI" ,score:"65%", widthNum:"65%"},
    {id:8, caption:"Git + GitHub" ,score:"85%", widthNum:"85%"},
    {id:9, caption:"RestApi" ,score:"80%", widthNum:"80%"},
    {id:9, caption:"Redux" ,score:"80%", widthNum:"80%"},


  ]

  const SkillItemData=[
    {icon:"bi bi-code-square", title:"Ready To Learn", summary:"I Love Learning and Update my skills EveryDay" },
    {icon:"bi bi-laptop" ,title:"Problem Solving", summary:"Programming is a challenge,so lets solve the problems"},
    {icon:"bi bi-gem", title:"Listener" ,summary:"Always Say my opinions, But if leader say something that should be done ,I will do what leader say to me"},
    {icon:"bi bi-unity", title:"Team Work" ,summary:"Collaborate with other programmers to achieve a common goal"},
  ]
    return (
       <>
       <section className='py-5 overflow-hidden ' id='ABOUT ME' style={{backgroundColor:currentMode === 'Dark' ? '#000' : '#fff',color:currentMode === 'Dark' ? '#fff' : '#000'}}  >
           <div className=" py-5 container" style={{backgroundColor:currentMode === 'Dark' ? '#000' : '#fff'}}>
            <SectionTitle content="ABOUT ME"  />
            <div className="row py-5 gy-5 gy-lg-0">
                <div className="col-lg-4 d-flex justify-content-center py-3">
                    <BlobContainer>
                      <Blob>
                         <BlobImg src={personImg} alt="person"/>
                      </Blob>
                    </BlobContainer>
                </div>
                <div className="col-lg-6 d-flex flex-column  offset-lg-1">
                <h1 className="fw-light">Alireza<span style={{color:currentColor}} >Delgarm</span></h1>
                <h5 className="fg-theme mb-3">UI/UX & Web Designer</h5>
                <p className="text-muted">I love coding, having challenge and solve problems teamWork lover and ready for learn new stuff</p>
                 <ul className='list-unstyled' >
                  <li><i className="bi bi-chevron-double-right me-2 " style={{color:currentColor}} ></i><b>From: </b> Tehran, Iran</li>
                  <li><i className="bi bi-chevron-double-right me-2 " style={{color:currentColor}} ></i><b>Lives In: </b> Karaj, Iran</li>
                  <li><i className="bi bi-chevron-double-right me-2 " style={{color:currentColor}} ></i><b>Age: </b> 21</li>
                  <li><i className="bi bi-chevron-double-right me-2 " style={{color:currentColor}} ></i><b>Phone: </b>+9809931455031</li>
                 </ul>
                
                </div>

            </div>
           </div>
           <div id='skills'className='mb-5' ></div>
           <div className='container py-5 mb-5' style={{backgroundColor:currentMode === 'Dark' ? '#262626' : '#f3f5fa'}}>
            <div className="row d-flex justify-content-center  ">
                <div className="col d-flex justify-content-center">
               <SectionTitle content="MY SKILLS" />
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 gx-md-3 align-items-center ">
                <div className="col  p-5">
                    <img src={skillImg} alt="skill" className='w-100 h-100 rounded-2 '/>
                </div>
                <div className="col p-5"> 
                {progressItemData.map(item=>(
                    <Progress key={item.id} caption={item.caption} score={item.score} widthNum={item.widthNum} />
                ))}       
                
                </div>

            </div>
           </div>

           <Bg className="container-fluid py-5 bg align-items-center d-flex overflow-hidden h-50"  style={{ backgroundImage: `url(${background})` }}>
           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center text-light g-1 g-md-5">
                {
                    SkillItemData.map(item=>(
                        <SkillItem icon={item.icon} title={item.title} summary={item.summary} />

                    ))
                }
             
              </div>
           </Bg>
          
       </section>
       </>
    );
};

export default AboutTopbar;