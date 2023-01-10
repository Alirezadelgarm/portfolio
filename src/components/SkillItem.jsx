import React from 'react';
import styled from "styled-components"
import { useStateContext } from '../context/ContextProvider';

const SkillItem = ({icon,summary,title}) => {
const { currentColor} = useStateContext();

const MyIcon=styled.i`
width: 60px;
height: 60px;
font-size: 30px;
border-radius: 50%;
border: 1px solid ${currentColor};
padding: 5px 7px;
background-color: ${currentColor};
color: white;

&:hover{
    color: ${currentColor};
    background: transparent;
    transition: .5s;
    transform: translateY(-10px);
}
`
const MyTitle=styled.p`
font-size: 1.25rem;

@media (min-width: 992px) { 
    font-size:1.5rem;
}
`
const MySummary=styled.p`
width: 50%;
text-align: center;

@media (min-width: 992px) { 
    width: 100%;
    text-align: start;
}
`
    return (
        <div className="col  d-flex flex-column mb-1 align-items-center ">
             <MyIcon className={icon} />
             <MyTitle>{title}</MyTitle>
             <MySummary className='fs-6 fw-lighter' >{summary}</MySummary>
        </div>
    );
};

export default SkillItem;