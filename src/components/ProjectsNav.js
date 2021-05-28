import React from 'react';
import styled from "styled-components";
import HeadShake from 'react-reveal/HeadShake';

const Wrapper = styled.div`
   height:100%;
   width:10%;
   position: absolute;
   display:flex;
   flex-direction:column;
   z-index:2;
   justify-content:space-around;
   padding:7px 2px 7px 5px;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);      
   background-color:#1d1d1d;
   border-radius:0 0 0 10px;
   gap:5px;
   
   @media (max-width: 700px) {
      flex-direction:row;
      width:100%;
      height:17%;
      flex-wrap:wrap;
      padding:7px 5px 2px 5px;
      text-align:center;
   }

   & div {
      height:24%;
      width:100%;
      background-color:#ff4338;
      border-radius:5px;
      transition:all 0.5s;
      cursor: pointer;
      opacity:0.6;
      color:white;
      writing-mode: vertical-lr;
      transform:rotate(-180deg); 
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;

      @media (max-width: 700px) {
         writing-mode: horizontal-tb;
         height:45%;
         width:35%;
         padding-right:0px;
         transform:rotate(0deg); 
         font-size:0.7rem;
      }
      &:hover {
        background-color:#fc5a51;
      }
   }
   & .selected {
      opacity:1;
   }
`


const ProjectsNav = ({displayProject, handleProjectsSwitch}) => {


   return (
      <Wrapper>
         <div onClick={()=>handleProjectsSwitch(0)} className={(displayProject === 0) ? 'selected' : 'notSelected'}><HeadShake delay="100"><p>Student Psychiatry</p></HeadShake></div>
         <div onClick={()=>handleProjectsSwitch(1)} className={(displayProject === 1) ? 'selected' : 'notSelected'}><HeadShake delay="300"><p>NPC Generator</p></HeadShake></div>
         <div onClick={()=>handleProjectsSwitch(2)} className={(displayProject === 2) ? 'selected' : 'notSelected'}><HeadShake delay="500"><p>Oakfield Photography</p></HeadShake></div>
         <div onClick={()=>handleProjectsSwitch(3)} className={(displayProject === 3) ? 'selected' : 'notSelected'}><HeadShake delay="700"><p>Myth-Des</p></HeadShake></div>
      </Wrapper>
   )
}

export default ProjectsNav;