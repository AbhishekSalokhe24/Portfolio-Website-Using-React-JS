import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`

display: flex;
padding: 1rem 6.5rem;
margin: 1.2rem;
justify-content: center;

.intro-card{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 284px;
    width: 100%;
    background-color: #78716C;
    border-radius: 21px;
    padding: 2rem 8rem;
}
.user-image{
    display: flex;
}
.user-image img{
    width: 27rem;
    border-radius: 15px;
}
.data-intro{
    display: flex;
    flex-direction: column;
    padding: 0rem 8rem;
}
.data-intro p{
    color:  #000000;
    font-weight: 900;
    padding: 0rem 4rem;
    text-align: justify;
}
#user{
    text-align: right;
}
@media (max-width: ${({ theme }) => theme.media.tab}) {
  .intro-card{
    flex-direction: column;
    height: auto;
    padding: 1rem 2rem;
  }
  .data-intro{
    padding: 0;
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {

  .intro-card{
    flex-direction: column;
    height: auto;
  }
  .data-intro{
   
    padding: 0;
  }
  .user-image img {
    width: 12rem;
  }
  .data-intro p {
    font-size: 1rem;
    padding: 0;
  }
 
}
`;

function IntoBox() {
  return (
    <Wrapper>
      <div className="intro-card">
        <div className="user-image">
            <img src="./Images/profile-pic.png" alt="" />
        </div>
        <div className="data-intro">
            <p>Welcome to my portfolio! I'm a dedicated web developer passionate about crafting dynamic, user-friendly websites. With a Bachelor's degree in Computer Science and expertise in HTML, CSS, and JavaScript, I focus on delivering top-notch solutions tailored to client and user needs. My aim is to contribute creatively to exciting projects and collaborate with motivated teams. Check out my portfolio for examples of my work, and let's discuss how we can bring your ideas to life!</p>
            <p id='user'>- Abhishek Salokhe</p>
        </div>

      </div>
    </Wrapper>
  )
}

export default IntoBox
