import React from 'react';
import styled from "styled-components";
import { AnimatePresence } from "framer-motion"
import projectInfo from '../portfolio projects/projects';
import professionalProjectInfo from '../portfolio projects/professionalProjects';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   background-color:#1d1d1d;
   /* border-radius:0 0 10px 10px ; */
   /* padding:40px 40px 40px 20px; */

   .categoryTitle {
      width:100%;
      color:white;
      font-size:2.0rem;
      text-align:start;
      margin-bottom:30px;
      margin-top:60px;
      /* text-decoration:underline;
      text-decoration-color:${props => props.theme.popColor}; */
      &:nth-of-type(2){
         margin-top:20px;
      }
   }

   @media (max-width: 700px) {
      width:100%;
      padding:0px;
      margin-left:0%;
      min-height:92%;
   } 

   & .projectsWrapper {
      width:100%;
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:flex-start;
      align-items:center;
      /* align-content:space-between; */
      overflow-y:scroll; 
      padding:0 40px 0px 60px;
      /* @media (max-width: 1900px) {
         width:85%;
      } 
      @media (max-width: 1400px) {
         width:95%;
         overflow-y:scroll; 
      } 
      @media (max-width: 900px) {
         width:100%;
         overflow-y:scroll; 
         padding:0;
      }  */
   }
`

const ProjectWrapper = styled.div`
   width:32%;
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
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   margin-bottom:50px;
   margin-right:auto;
   /* margin-left:auto; */
   @media (max-width: 1400px) {
      width:100%;
   } 
   
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
      /* padding:20px 0px 5px 0px; */
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

   h3 {
      z-index:9999;
      font-size:1.7rem;
      text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
   }
`




const ProjectGrid = ({openProjectModal, setTotalProjects}) => {
   let profProjectGridHtml = false;
   let projectGridHtml = false;
   let key = 0;

   // Create project grids
   const createProjectGrid = () => {
      let tempHtml = [];
   
      projectInfo.forEach(project => {
         let projectID = key;
         tempHtml =  [...tempHtml,(
            <ProjectWrapper  key={key} onClick={()=>openProjectModal(projectID)} style={{backgroundImage: `url(${project.image})`}}>
               <div className="cover"></div>
               <h3>{project.title}</h3>
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
      console.log(key)
      setTotalProjects(key - 1)
      return tempHtml;
   }
   const createProfProjectGrid = () => {
      let tempHtml = [];
   
      professionalProjectInfo.forEach(project => {
         let projectID = key;
         tempHtml =  [...tempHtml,(
            <ProjectWrapper  key={key} onClick={()=>openProjectModal(projectID)} style={{backgroundImage: `url(${project.image})`}}>
               <div className="cover"></div>
               <h3>{project.title}</h3>
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
      console.log(key)
      setTotalProjects(key - 1)
      return tempHtml;
   }
   if(!projectGridHtml){
      projectGridHtml = createProjectGrid();
   }
   if(!profProjectGridHtml){
      profProjectGridHtml = createProfProjectGrid();
   }


   return(
      <AnimatePresence initial={false}>
         <Wrapper>
            <div className="projectsWrapper">
               <h2 className="categoryTitle">Professional Projects</h2>
               {profProjectGridHtml}
               <h2 className="categoryTitle">Personal Projects</h2>
               {projectGridHtml}
            </div>
         </Wrapper>    
      </AnimatePresence>
   )
}


export default ProjectGrid;