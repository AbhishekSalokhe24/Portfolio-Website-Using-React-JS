import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`

display: flex;
padding: 1rem 6.5rem;
margin: 1.2rem;
justify-content: center;

.intro-card{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    background-color: #57534E;
    border-radius: 21px;
}
.edu-detail{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem ;
}
.edu-image{
    display: flex;
    align-items: center;
    width: 35rem;
    padding-left: 4rem;
}
.edu-image img{
    width: 25rem;
}
p{
    font-size: 3rem;
    color: #fff;
}
li{
    font-size: 2rem;
    font-weight: 700;
    color: #dddcdc;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .intro-card{
        flex-direction: column;
    }
    .edu-image{
        padding: 0;
        width: auto;
    }
    p{
        font-size: 1.7rem;
    }
    li{
        font-size: 1.5rem;
    }
}
`;

function Education() {
  return (
    <Wrapper>
      <div className="intro-card">
      <div className="edu-image">
        <img src="./Images/Reading.png" alt="" />
       </div>
       <div className="edu-detail">
            <p>Education:</p>
                <ul>
                    <li>Bachelor of Science in Computer Science, XYZ University</li>
                </ul>
            <p>Skills:</p>
                <ul>
                    <li>Proficient in HTML5, CSS3, JavaScript</li>
                    <li>Familiar with React.js and Node.js</li>
                    <li>Experience with version control systems like Git</li>
                </ul>
       </div>
      
      </div>
    </Wrapper>
  )
}

export default Education
