import React from 'react'
import styled from 'styled-components';

function Services() {
  
  return (
    <Wrapper>
    <h2>Services</h2>
    
    <div class="box">


        <div class=" service-card">
            <div class="circle-main">
                <img src="./Images/Services/Web coding.png" alt="" srcset=""/>
            </div>
            <div class="content">
                <h3>Web Developer</h3>
                <p>Elevate your online presence with custom web solutions tailored to meet your unique needs. Specializing in modern web technologies like React JS and crafting responsive designs for seamless user experiences, I'm here to bring your vision to life.</p>
            </div>
            <div class="bottom-circle"></div>
        </div>

        <div class=" service-card">
            <div class="circle-main">
                <img src="./Images/Services/UI UX.png" alt="" srcset=""/>
            </div>
            <div class="content">
                <h3>Ui/Ux Designer</h3>
                <p>  Craft engaging digital experiences that captivate your audience. Offering intuitive user interface designs and seamless user experiences, I pay meticulous attention to detail to ensure maximum impact. Let's create something remarkable together!</p>
            </div>
            <div class="bottom-circle"></div>
        </div>

        <div class=" service-card">
            <div class="circle-main">
                <img src="./Images/Services/freelancer New.png" alt="" srcset=""/>
            </div>
            <div class="content">
                <h3>Freelancer</h3>
                <p>Your go-to freelance partner for all your digital needs. With services including web development, UI/UX design, and custom solutions tailored to your requirements, I'm ready to collaborate and exceed your expectations.</p>
            </div>
            <div class="bottom-circle"></div>
        </div>
    </div>
</Wrapper>
  )
}

const Wrapper = styled.section`
height: auto;
h2{
    margin-top: 45px;
}
.box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem;
    height: auto;
}
.service-card {
    display: flex;
    position: relative;
    align-items: center;
    height: 35rem;
    width: 37rem;
    flex-direction: column;
    z-index: 1;
    margin: 0rem 4rem 12rem 4rem;
    bottom: 4rem;
}
 .circle-main {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12rem;
    width: 12rem;
    background-color: #78716C;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    top: 5rem;
    z-index: 2;
}
 .circle-main img {
    width: 7rem;
    height: 7rem;
}
.content {
    position: absolute;
    height: 21.5rem;
    width: 100%;
    background-color: #57534E;
    top: 9rem;
    padding-top: 0rem;
}
 h3 {
    margin-top: 8.5rem;
    text-align: center;
    font-weight: 700;
    color: #fff;
    font-size: 3rem;
}
 p {
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    padding: 1rem 2.5rem;
    font-weight: 500;
}
.bottom-circle {
    display: flex;
    height: 37rem;
    width: 100%;
    border-radius: 50%;
    background-color: #57534E;
    position: absolute;
    top: 12rem;
    z-index: -1;
}


`;

export default Services
