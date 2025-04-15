'use client';
import { useState,useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {

  const [isDarkMode, setIsDarkmode] = useState(false);

  useEffect(() =>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && 
    window.matchMedia('(prefers-color-theme: dark)').matches)){
      setIsDarkmode(true);
    }else{
      setIsDarkmode(false);
    }
  }, [])

  useEffect(() =>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkmode={setIsDarkmode}/>
      <Header isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode}/>
      <Work isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
