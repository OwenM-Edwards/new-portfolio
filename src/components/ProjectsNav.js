import React from 'react';
import styled from "styled-components";
import HeadShake from 'react-reveal/HeadShake';

const Wrapper = styled.div`
   height:100%;
   width:20%;
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   padding:7px 2px 7px 5px;
   background-color:#1d1d1d;
   border-radius:0 0 0 10px;
   align-items:center;

   @media (max-width: 700px) {
      flex-direction:row;
      width:100%;
      height:8%;
      padding:2px 5px 0px 5px;
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
      -webkit-user-select: none; /* Safari */        
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
      max-width:100px;
      padding-left:5px;

      @media (max-width: 700px) {
         writing-mode: horizontal-tb;
         height:50%;
         width:45%;
         padding:0px;
         transform:rotate(0deg); 
         font-size:0.7rem;
         max-width:50%;
         max-height:50%;
         min-height:30px;
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