import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: "Quicksand", sans-serif;
    
}
html{
    font-size: 62.5%;
    overflow-x:hidden;
    cursor: url("./Images/pointer (1).png"),auto;
}
body{
  background-color: #292524;
}
body::-webkit-scrollbar {
  width: 1.5rem;
  overflow-x: hidden;
}

body::-webkit-scrollbar-track {
   background-color: #292524;
}

body::-webkit-scrollbar-thumb {
 
  background-color: #38BDF8;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1{
    color: ${({theme}) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 700px;
}
h2{
    color: ${({theme}) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 700px;
    white-space: normal;
    text-align:  center;
}
h3{
    font-size: 1.8rem;
    font-weight: 400;
}
p{
    color: ${({theme}) => theme.colors.text};
    opacity: .7;
    font-size: 2rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight:600;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
    font-size: 1.8rem;
    padding: 1.6rem 2.4rem;
    border: 1px solid #030637 ;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    resize: none;
}
input[type="submit"]{
    border-radius: 10px;
    max-width: 16rem;
    margin-top: 2rem;
    background-color: #0f1430;
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

    // 998 px
  @media (max-width: ${({theme}) => theme.media.tab}) {
    html{
      overflow-x: hidden;
    }
    .container{
      padding:0 3.2rem;
    }
    .grid-two-column, .grid-three-column, .grid-four-column{
      grid-template-columns: 1fr 1fr;
    }              
  }
  @media (max-width: ${({theme}) => theme.media.mobile}) {

    html{
      font-size: 50%;
      overflow-x: hidden;
    }
     
    
    .grid-two-column, .grid-three-column, .grid-four-column{
      grid-template-columns: 1fr;
    }  
  }
`;