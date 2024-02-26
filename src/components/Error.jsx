import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';

function Error() {

  return (
    <div>
      <Wrapper>
        <img src="./Images/Error Image.jpg" alt="" />
        <NavLink to="/">
          <Button className="btn">Go Back</Button>
        </NavLink>
      </Wrapper>
    </div>
  )
  
}

const Wrapper = styled.section`
    
padding: 3rem 0;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

img{
    width: 500px;
}

.btn{
    font-size: 1.8rem;
}

`;
export default Error
