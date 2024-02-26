import React from 'react'
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`

display: flex;
padding: 1rem 6.5rem;
margin: 1.2rem;
justify-content: center;
.main-skill-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color:  #78716C;
    margin: 2rem 0rem;
    border-radius: 21px;
}
.btn-skill{
    display: flex;
    justify-content: center;
    margin: 2rem;
}
#btn-s{
    width: 200px;
}
.skill-grid{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    padding: 1rem;
}
.skill-div{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 235px;
    width: 238px;
    background-color:#57534E;
    border-radius: 15px;
    margin: 1rem;
}
.skill-div img{
  width: 12rem;
  padding-top: 1rem;
}
.skill-div h3 {
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    padding-top: 1rem;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .skill-div{
    height: 90px;
    width: 90px;
  }
  .skill-div img{
     width: 45px;
  }
  .skill-div h3{
    font-size: 1.2rem;
  }
}
`;
function Skills() {
  return (
    <Wrapper>
      <div className="main-skill-div">
       <div className="btn-skill">
            <Button id="btn-s">
                <NavLink to="/about">MY SKILLS</NavLink>
            </Button>
       </div>
       <div className="skill-grid">

         <div className="skill-div">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html" srcset="" />
            <h3>HTML</h3>
         </div>
         <div className="skill-div">
            <img src="./Images/Skills/css-3.png" alt="Css" srcset="" />
            <h3>CSS</h3>
         </div>
         <div className="skill-div">
            <img src="./Images/Skills/js.png" alt="JS" srcset="" />
            <h3>JavaScript</h3>
         </div>
         <div className="skill-div">
           <img src="./Images/Skills/react js.png" alt="React" srcset="" />
           <h3>React Js</h3>
         </div>
         <div className="skill-div">
            <img src="./Images/Skills/Tail wind css2.png" alt="Taiwind css" srcset="" />
            <h3>Tailwind CSS</h3>
         </div>
         <div className="skill-div">
            <img src="./Images/Skills/Bootstrap.png" alt="Bootstrap" srcset="" />
            <h3>Bootstrap</h3>
         </div>
         <div className="skill-div">
            <img src="./Images/Skills/figma.png" alt="figma" srcset="" />
            <h3>Figma</h3>
         </div>
         <div className="skill-div">
            <img src="./Images/Skills/c-.png" alt="cpp" srcset="" />
            <h3>C++</h3>
         </div>
         <div className="skill-div">
         <img src="./Images/Skills/java1.png" alt="java1" srcset="" />
            <h3>Java</h3>
         </div>
         <div className="skill-div">
         <img src="./Images/Skills/my sql.png" alt="sql" srcset="" />
             <h3>SQL</h3>
         </div>

       </div>
      </div>
    </Wrapper>
  )
}

export default Skills
