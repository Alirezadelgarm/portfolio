import React,{useEffect} from 'react';
import AboutTopbar from './components/AboutTopbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomeTopbar from './components/HomeTopbar';
import Portfolio from './components/Portfolio';
import SettingButton from './components/SettingButton';
import {useStateContext} from './context/ContextProvider';

const App = () => {

  const { setCurrentColor, setCurrentMode } = useStateContext();

  useEffect(() => {
    const getData=()=>{
      const currentThemeColor = localStorage.getItem('colorMode');
      const currentThemeMode = localStorage.getItem('themeMode');
      if (currentThemeColor && currentThemeMode) {
        setCurrentColor(currentThemeColor);
        setCurrentMode(currentThemeMode);
      }
    }
    getData();
  }, []);
  
    return (
       <>
     
       <HomeTopbar/>
       <AboutTopbar/>
       <Portfolio/>
       <Contact/>
       <Footer/>
       <SettingButton/>
        
       
       
       </>
    );
};

export default App;