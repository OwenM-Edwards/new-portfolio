import React, { useEffect, useState }  from 'react';
import styled, { ThemeProvider } from "styled-components";
import { useLocation } from 'react-router-dom'

const Wrapper = styled.div`
   height:100%;
   width:10%;
   background-color:purple;
   position: absolute;

   display:flex;
   flex-direction:column;

   & div {
      height:25%;
      width:100%;
      background-color:red;
      border:1px solid white;
      transition:all 0.5s;
      cursor: pointer;
      opacity:0.5;
   }
   & .selected {
      opacity:1;
   }
`


const ProjectsNav = ({setDisplayProject, displayProject, handleProjectsSwitch}) => {


   return (
      <Wrapper>
         <div onClick={()=>handleProjectsSwitch(0)} className={(displayProject === 0) ? 'selected' : 'notSelected'}>1</div>
         <div onClick={()=>handleProjectsSwitch(1)} className={(displayProject === 1) ? 'selected' : 'notSelected'}>2</div>
         <div onClick={()=>handleProjectsSwitch(2)} className={(displayProject === 2) ? 'selected' : 'notSelected'}>3</div>
         <div onClick={()=>handleProjectsSwitch(3)} className={(displayProject === 3) ? 'selected' : 'notSelected'}>4</div>
      </Wrapper>
   )
}

export default ProjectsNav;