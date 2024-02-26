import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./GlobalStyle";
import Error from './components/Error'
import Footer from './components/Footer'
import GoTotop from './components/GoTotop'
import Project from './components/Project'

function App() {

  const theme = {
    colors:{
      heading:"#0EA5E9",
      text:"#291105",
      white:"#fff",
      black:"#000",
      helper:"#CBD5E1w",
      bg:"#F8EDFF",
      footer_bg:"#22092C",
      btn:"#4E4FEB",
      border:"rgba(98,84,243,0.5)",
      hr:"#fff",
    },
    media:{mobile:"768px", tab:"1024px"},

  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
     
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <GoTotop/>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
   

    </>
  )
}

export default App
