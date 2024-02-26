import React from 'react'
import styled from 'styled-components';

function Contact() {

  const Wrapper = styled.section`
   
  padding: 5rem 0 5rem 0;
  .container{
    margin-top: 6rem;
    text-align: center;
    background-color: #71717A;
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1rem;
    

    .contact-form{
      max-width: 50rem;
      margin: auto;
    }
    .contact-inputs{
      display: flex;
      flex-direction: column;
      gap:2.5rem;
      
      input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              font-weight: 500;
              transform: scale(0.9);
            }
          }

    }
  }
  h2{
    padding-bottom: 1rem;
  }
  
  `;

  return (
    <Wrapper>
       <h2>Contact Me</h2>
       {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30258.791766751885!2d73.87364152943881!3d18.55829941231335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c121e729d42f%3A0xdee396345955cdf1!2sCREATICITY%2C%20CREATICITY%20MALL%2C%20Shastrinagar%2C%20Yerawada%2C%20Pune%2C%20Maharashtra%20411006!5e0!3m2!1sen!2sin!4v1708656679297!5m2!1sen!2sin" width="100%" height="450" style={{border:0} }allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
       <div className="container">
      <p>Fill this form</p>
        <div className="contact-form">
          <form action="https://formspree.io/f/mwkgbkno" method='POST' className="contact-inputs">
            <input
            type="text"
            name="username"
            placeholder="Username" 
            autoComplete="off"
            required/>

           <input
            type="email"
            name="email"
            placeholder="email" 
            autoComplete="off"
            required/>

            <textarea name="message"  cols="30" rows="6"  autoComplete="off" 
            required placeholder="message "></textarea>

            <input type="submit" value="Send"/>
          </form>
        </div>
       </div>
    </Wrapper>
  )
}

export default Contact
