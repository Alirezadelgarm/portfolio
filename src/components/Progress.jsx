import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import styled from 'styled-components';
const Progress = ({caption,score,widthNum}) => {

  const { currentColor} = useStateContext();


 const MyProgressWrapper=styled.div`
  display: block;
  margin: 10px 0;
` 
 const MyCaption=styled.span`
 font-weight: 500;
 `
 const MyProgress=styled.div`
 margin-top: 5px;  
 border: 3px solid ${currentColor} ; 
 `

    return (
          <MyProgressWrapper>
            <MyCaption>{caption}</MyCaption>
            <MyProgress className="progress h-25 p-1 bg-transparent rounded-pill " >
            <div className="progress-bar progress-bar-striped progress-bar-animated rounded-pill  "  aria-label="Animated striped example" role="progressbar" style={{width:widthNum, backgroundColor:currentColor,borderColor:currentColor}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{score}</div>
            </MyProgress>
          </MyProgressWrapper>
           

    );
};

export default Progress;