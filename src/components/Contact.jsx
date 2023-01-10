import React from 'react';
import SectionTitle from './SectionTitle';
import { useStateContext } from '../context/ContextProvider';
import styled from 'styled-components';
const Contact = () => {

    const { currentColor,currentMode} = useStateContext();

    const MyInfo=styled.div`
    width: 100%;
    background: ;
    `
    const Span=styled.span`
   font-size: 18px;
   display: inline-block;
   background-color:${currentColor} ;
   color: #fff;
   line-height: 1;
   padding: 8px 0;
   border-radius: 50%;
   text-align: center;
   width: 36px;
   height: 36px;
   transition: 0.3s;
   float: left;
   width: 44px;
   height: 44px;
   display: flex;
   justify-content: center;
   align-items: center;
   &:hover{
    color: #fff;
    transform: scale(1.2);
   }
    `
    const H4=styled.h4`
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    // color: #45505b;
    `
    const P=styled.p`
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: #728394;
    `
    const ButtonSubmit=styled.button`
    background: ${currentColor};
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
    margin-top: 8px;
    `
    return (
        <section id="Contact" className="contact py-5 " style={{backgroundColor:currentMode === 'Dark' ? '#262626' : '#fff',color:currentMode === 'Dark' ? '#fff' : '#000'}}>
        <div className="container" >
  
         
          <SectionTitle content="CONTACT"  />
          <div className="row mt-1">
  
            <div className="col-lg-4">
              
               <MyInfo>
                <div>
                  <Span><i className="bi bi-envelope" ></i></Span>
                  <H4>Email:</H4>
                  <P>alireza0delgarm@gmail.com</P>                
                </div>
  
                <div className='mt-5 '>
                  <Span><i className="bi bi-phone" ></i></Span>
                  <H4>Call:</H4>
                  <P>+9809931455031</P>
                </div>
               </MyInfo>
                
  
              
  
            </div>
  
            <div className="col-lg-8 mt-5 mt-lg-0">
  
              <form  className=" w-100 ">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center"><ButtonSubmit>Send Message</ButtonSubmit></div>
              </form>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
};

export default Contact;