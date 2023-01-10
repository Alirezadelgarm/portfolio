import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();



export const ContextProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Dark');
   
    const setMode = (mode) => {
      setCurrentMode(mode);
      localStorage.setItem('themeMode', mode);
    };
  
    const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
    };
  
  
    return (
      <StateContext.Provider value={{ currentColor, currentMode, setCurrentColor, setCurrentMode, setMode, setColor}}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);
  