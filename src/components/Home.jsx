
import { useEffect } from 'react';
import { useGlobalContext } from '../contex'
import styled from 'styled-components';
import Hero from './Hero'
import IntoBox from './IntoBox';
import Skills from './Skills';

function Home() {

  const {updateHomePage} = useGlobalContext();

  useEffect(()=>{
    updateHomePage();
  },[]);


  return (
    <div>
       <Hero/>
       <IntoBox/>
       <Skills/>
    </div>
  )
}

const Wrapper = styled.section`

padding: 4rem 0;

.section-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E4F1FF;
  padding: 2rem;
}
.card{
  display: flex;
  width: 800px;
  background-color: #fff;
  margin: 4rem 0;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
}
.img-user{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
}
.img-user img{
  width: 200px;
  margin: 1.4rem;
  border-radius: 50%;
}
.intro{
  display: flex;
  flex-direction: column;
}

i{
  padding: 5px;
  font-size: 2rem;
}
#p-text{
  color: #040648;
}

`;

export default Home
