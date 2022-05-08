import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectInfo from '../portfolio projects/projects';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   background-color:#1d1d1d;
   border-radius:0 0 10px 10px ;
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
   align-items:center;
   justify-content:center;
   text-align:center;
   margin-bottom:40px;
   position:relative;
   background-position:center;
   background-repeat:no-repeat;
   background-size: cover;
   overflow:hidden;

   & .popup {
      position:absolute;
      height:auto;
      width:100%;
      background-color:${props => props.theme.popColor};
      bottom:0;
      left:0;
      opacity:1;
      display:none;
      justify-content:center;
      align-items:center;
      font-size:1.6rem;
      padding:10px;
      border-radius:0 5px 0 0 ;
   }
   
   @media (max-width: 700px) {
      padding:20px 0px 5px 0px;
   }
   
   img {
      object-fit:cover;
      border-radius:5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
   }

   .cover {
      position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      background-color:${props => props.theme.offBlack};
      opacity:0.2;
      transition:opacity 0.5s;
   }
   &:hover {
      .cover {
         opacity:0.7;
      }
      .popup {
         display:flex;
      }
   }

   h2 {
      font-size:2.6rem;
      z-index:9999;
   }
`




const ProjectGrid = ({openProjectModal, setTotalProjects}) => {
   let projectGridHtml = false;

   // Create project grid
   const createProjectGrid = () => {
      let tempHtml = [];
      let key = 0;

      projectInfo.forEach(project => {
         let projectID = key;
         tempHtml =  [...tempHtml,(
            <ProjectWrapper  key={key} onClick={()=>openProjectModal(projectID)} style={{backgroundImage: `url(${project.image})`}}>
               <div className="cover"></div>
               <h2>{project.title}</h2>
               <Fade 
                  bottom
                  duration={400}
               >
                  <div className="popup">Take a look!</div>
               </Fade>
            </ProjectWrapper>
         )];
         key++;
      });
      setTotalProjects(key - 1)
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