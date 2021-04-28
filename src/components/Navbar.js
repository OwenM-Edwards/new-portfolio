import React, { useEffect, useState }  from 'react';
import styled, { ThemeProvider } from "styled-components";
import { useLocation } from 'react-router-dom'

const Wrapper = styled.div`
   height:100%;
   width:10%;
   background-color:blue;
   transition:all 0.2s ease-in-out;
   order:${props => props.theme.order};
   z-index:2;
`
const shown = {
   order: "1",
}
const hidden = {
   order: "3",
}


const Navbar = ({initialPosition}) => {
   const location = useLocation();
   const [navState, setNavState] = useState(false);

   useEffect(()=>{
      if(window.location.pathname.includes('main')){
         setNavState(true)
      }
      else {
         setNavState(false)
      }
   },[location]);

   return (
      <ThemeProvider theme={navState ? shown : hidden }>
         <Wrapper>

         </Wrapper>
      </ThemeProvider>

   )
}

export default Navbar;