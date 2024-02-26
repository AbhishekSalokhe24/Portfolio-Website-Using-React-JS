import React from 'react'
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {  FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
    
    const Wrapper = styled.section`
    #bottom-msg{
      text-align: center;
      color: #0284C7;
      font-size: 3.5rem;
      font-weight: 700;
      margin: 1rem 0rem 2rem 0rem; 
    }

    footer {
    padding: 14rem 0 9rem 0;
    background-color: #1C1917;
    #name{
      color: #0284C7;
    }
   
    h3 {
      color: #fff;
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.5rem;
    }
  
    .footer-social--icons {
      display: flex;
      gap: 2rem;
  
      div {
        padding: 1rem;
        .icons {
          color: #0284C7;
          font-size: 2.4rem;
          position: relative;
          cursor: url("./Images/loading.png"),auto;
        }
      }
    }
  }
  .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
    
  @media (max-width: ${({theme}) => theme.media.mobile}) {
    .contact-short {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 95vw;
      padding: 2rem 0;
   }
   .footer-bottom--section{
    padding: 3.2rem;
   }
  }
   
    `;
  return (
    <Wrapper>
      <h3 id='bottom-msg'>"Thanks For Scrolling"</h3>
      {/* footer-section */}
      <footer>
      <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 id='name'>Abhishek Salokhe</h3>
            <p>Fullstack Web developer, software Engineer, Frontend Devloper</p>
          </div>


          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://linkedin.com/in/abhishek-salokhe/" target="_blank">  <FaLinkedin className="icons" /></a>
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a href="https://github.com/AbhishekSalokhe24" target="_blank"><FaGithub className="icons" /></a>
              </div>
              <div>
                <a
                  href="#"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Me on,</h3>
            <h3>+91 8767977069</h3>
            <h3>e-mail Me on,</h3>
            <h3>abhisaloke2424@gmail.com</h3>
          </div>
        </div>
         {/* bottom section  */}
         <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} ABHISHEK SALOKHE. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>

    </Wrapper>
  )
}

export default Footer
