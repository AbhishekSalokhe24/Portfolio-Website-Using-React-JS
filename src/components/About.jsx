import React, { useEffect } from 'react'
import Hero from './Hero'
import { useGlobalContext } from '../contex'
import Education from './Education';
import Skills from './Skills';

function About() {

  // const data = {
  //   name:"Full Stack Developer",
  //   image:"./Images/Website Creator-bro.png",
  //   top_text:"I am",
  //   bottom_text:"I possess practical experience with cutting-edge technologies."
  // };

  const {updateAboutPage} = useGlobalContext();

  useEffect(()=>{
    updateAboutPage();
  },[]);

  return (
    <div>
        <Hero/>
        <Education/>
        <Skills/>
    </div>
  )
}

export default About
