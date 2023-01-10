import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import styled from 'styled-components';



const SettingTheme = () => {
    
  const { setColor, setMode, currentMode, currentColor } = useStateContext();
  

    const themeColors = [
        {
          name: 'blue-theme',
          color: '#1A97F5',
          id:1,
        },
        {
          name: 'green-theme',
          color: '#03C9D7',
          id:2,
        },
        {
          name: 'purple-theme',
          color: '#7352FF',
          id:3,
        },
        {
          name: 'red-theme',
          color: '#FF5C8E',
          id:4,
        },
        {
          name: 'indigo-theme',
          color: '#1E4DB7',
          id:5,
        },
        {
          color: '#FB9678',
          name: 'orange-theme',
          id:6,
        },
      ];
const SettingContainer=styled.div`
width: 300px;
height: 60px;
padding: 10px;
background-color:#262626;
display: flex;
align-items: center;
position: fixed;
bottom: 0px;
left: 40px;
transform: translate(15px, -10px);
border-radius: 10px;
transition: .5s;
z-index:1000;
`
const SettingBtn=styled.button`
border-radius: 50%;
width: 30px;
height: 30px;
font-size: 10px;
margin-left: 5px;
display: flex;
justify-content: center;
align-items: center;
`
    return (
      <SettingContainer>
        {themeColors.map(item=>(
            <SettingBtn
            type="button"
            key={item.id}  
            className=" btn  "
            style={{ backgroundColor: item.color }}
            onClick={() => setColor(item.color)}
            >
            <i className="bi bi-check fs-5 text-white" style={{display:item.color === currentColor ? 'block' : 'none'}} ></i>
            </SettingBtn>
         
           
        ))}
        <div className="form-check form-switch ">
           <input className="form-check-input ms-1" type="checkbox" role="switch" onClick={()=> {currentMode==="Dark"?setMode("Light"):setMode("Dark") }} checked={currentMode==="Dark"} />
        </div>
      </SettingContainer>
    
    
    );
};

export default SettingTheme;