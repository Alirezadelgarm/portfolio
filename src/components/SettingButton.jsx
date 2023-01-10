import React, { useState} from 'react';
import SettingTheme from './SettingTheme';
import styled from 'styled-components';
import { useStateContext } from '../context/ContextProvider';


const SettingButton = () => {
    const { currentColor} = useStateContext();
    const[click,setClick]=useState(false)
    
   const MyContainerSetting=styled.div`
   position: fixed;
   bottom: 20px;
   left: 10px;
   z-index: 100;
   `
   const MySettingBtn=styled.button`
   border-radius: 50%;
   width: 40px;
   height: 40px;
   border: none;
   outline: none;
   color: #fff;
   text-align: center;
   line-height: 2px;
   background-color: ${currentColor};

   animation: spin infinite 2s linear;

   @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
   `
    return (
       <>
       <MyContainerSetting>
                <MySettingBtn onClick={()=>{setClick(!click)}}  ><i className="bi bi-gear-fill"></i></MySettingBtn>
       </MyContainerSetting>    
       {click && <SettingTheme/>
           
           
        }
       </>
      
    );
};

export default SettingButton;