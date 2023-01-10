import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import styled from "styled-components"
const SectionTitle = ({content}) => {
    const { currentColor,currentMode } = useStateContext();
   const MyTitle=styled.h2`
   font-size: 32px;
   font-weight: bold;
   text-transform: uppercase;
   margin-bottom: 20px;
   padding-bottom: 20px;
   position: relative;
   color:${currentMode === 'Dark' ? '#fff':'#262626' };
   &::before{
    content: "";
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #ddd;
    bottom: 1px;
    left: calc(50% - 60px);
   }

   &::after{
    content: "";
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: ${currentColor}!important;
    bottom: 0;
    left: calc(50% - 20px);
   }

   `
    return (
        <div className="text-center mb-5"  >
            <MyTitle>{content}</MyTitle>
        </div>
    );
};

export default SectionTitle;