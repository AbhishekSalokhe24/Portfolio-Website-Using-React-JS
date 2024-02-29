import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import { useTypingEffect } from '../Hooks/typing-effect';
import { useGlobalContext } from '../contex'

function Hero() {

  const {name,image,top_text,bottom_text} = useGlobalContext(); // from contex


  let t = bottom_text;
  const text = useTypingEffect(t,100);
  // let n = name;
  const name2 = useTypingEffect(name,100);
  return (
    <Wrapper>
    <div className="container grid grid-two-column">
      <div className="section-hero-data">
        <p className="hero-top-data">Hi,<span class="wave">👋</span> {top_text}</p>
        {/* below name Abhishek Salokhe */}
        <h1 className="hero-heading">{name2}</h1> 
        <p className="hero-para">
          {text}
        </p>
        <Button className="btn hireme-btn">
          {/* Resume Link Here G-drive */}
           <a href="https://drive.google.com/file/d/1h7VEsV5qS8VSReZLUQ91U4nYcQrU-_jg/view?usp=sharing">Download Resume</a>
        </Button>
      </div>

      {/* for image  */}
      <div className="section-hero-image">
        <picture>
          <img src={image} alt="hero image" className="hero-img " />
        </picture>
      </div>
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`

padding: 4rem 0;

.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 25rem;
}

.hero-top-data {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.5rem;
  color: #CBD5E1;
} 

.hero-heading {
  text-transform: uppercase;
  font-size: 4.5rem;
}

.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
  color: #A1A1AA;
}

.section-hero-image {
  display: flex;
  justify-content: center; 
  align-items: center;
}

picture {
  text-align: center;
}

.hero-img {
  max-width: 90%;
  animation: floatImage 4s ease-in-out infinite;
}
span{
  font-size: 3.5rem;
}
.wave {
  animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;        /* Change to speed up or slow down */
  animation-iteration-count: infinite;  /* Never stop waving :) */
  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}

/* For demonstration purposes only: */
body { font-size: 3.5em }
h1 { font-size: 0.5em }
@keyframes  floatImage {
    0%{
        transform: translateX(2rem);
    }
    50%{
        transform: translateY(2rem);
    }
    100%{
        transform: translateX(2rem);
    }
}
@media (max-width: ${({ theme }) => theme.media.tab}) {
  .hero-top-data {
    font-size: 1.5rem;
  }
  .hero-heading {
    font-size: 2.5rem;
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .hero-heading {
    font-size: 3.5rem;
  }
  .grid {
    gap: 7.2rem;
  }
}
`;

export default Hero
