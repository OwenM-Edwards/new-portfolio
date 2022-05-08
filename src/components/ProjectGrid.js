import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectInfo from '../portfolio projects/projects';

const Wrapper = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   background-color:#1d1d1d;
   border-radius:0 0 10px ;
   padding:60px 10px 0px 10px;

   @media (max-width: 700px) {
      width:100%;
      padding:0px;
      margin-left:0%;
      min-height:92%;
   } 

   & .projectsWrapper {
      width:65%;
      height:96%;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-items:center;
      align-content:space-between;
      /* overflow-y:scroll; */
      padding:0 40px 0px 40px;
     

   }
`

const ProjectWrapper = styled.div`
   width:48%;
   height:47%;
   color:white;
   display:flex;
   cursor:pointer;
   flex-direction:column;
   text-align:center;
   margin-bottom:40px;
   position:relative;

   
   
   @media (max-width: 700px) {
      padding:20px 0px 5px 0px;
   }
   
   img {
      max-width: 100%;
      max-height: 100%;
      object-fit:contain;
      border-radius:5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   }

   div {
      position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      background-color:${props => props.theme.offBlack};
      opacity:0.2;
      transition:opacity 0.2s;
   }
   &:hover {
      div {
         opacity:0.7;
      }
   }


   h2 {
      font-size:2.6rem;
      position:relative;
      bottom:53%;
   }

   
`




const ProjectGrid = ({openProjectModal}) => {
   let projectGridHtml = false;

   // Create project grid
   const createProjectGrid = () => {
      let tempHtml = [];
      let key = 0;

      projectInfo.forEach(project => {
         let projectID = key;
         tempHtml =  [...tempHtml,(
            <ProjectWrapper  key={key} onClick={()=>openProjectModal(projectID)}>
               <img src={project.image}/>
               <div></div>
               <h2>{project.title}</h2>
            </ProjectWrapper>
         )];
         key++;
      });
      
      return tempHtml;
   }
   if(!projectGridHtml){
      projectGridHtml = createProjectGrid();
   }



   return(
      <AnimatePresence initial={false}>
         <Wrapper>
            <div className="projectsWrapper">
               {projectGridHtml}
            </div>
         </Wrapper>    
      </AnimatePresence>
   )
}


export default ProjectGrid;