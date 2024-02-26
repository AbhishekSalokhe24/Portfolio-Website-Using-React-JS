import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaArrowUp } from "react-icons/fa"


function GoTotop() {
    
    const [isDisplay,setDisplay] = useState(false);

const BtnTop = ()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
}
const listenTOScroll = ()=>{


    let hightHidden = 450;
    const WinScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(WinScroll > hightHidden){
        setDisplay(true);
    }
    else{
        setDisplay(false);
    }
}
useEffect(()=>{
    window.addEventListener("scroll",listenTOScroll);
},[])
  return (
    <Wrapper>
        {isDisplay && (<div className='top-btn' onClick={BtnTop}>
             <FaArrowUp className="top-btn--icon" />
        </div>)}
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
     display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  /* that round arrow btn */
  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: #0284C7;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: url("./Images/loading.png"),auto;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  @media (max-width: ${({theme}) => theme.media.mobile}) {
    .top-btn{
      left: 40%;
      right: 0;
    }
  }
`;

export default GoTotop
