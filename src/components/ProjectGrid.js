import React from 'react';
import styled from "styled-components";
import { AnimatePresence } from "framer-motion"
import personalProjectInfo from '../portfolio projects/personalProjects';
import professionalProjectInfo from '../portfolio projects/professionalProjects';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
   width:100%;
   height:100%;
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   background-color:#1d1d1d;
   padding:10px 20px;


   @media (max-width: 900px)  {
      padding:5px;
   } 

   .categoryTitle {
      width:100%;
      color:white;
      font-size:2.0rem;
      text-align:start;
      margin-bottom:30px;
      margin-top:60px;
      
      &:nth-of-type(2){
         margin-top:20px;
      }
      @media (max-width: 900px)  {
         margin-top:30px;
      } 
      @media (max-width: 780px)  {
         font-size:1.7rem;
         
      } 
   }

   & .projectsWrapper {
      width:100%;
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:flex-start;
      align-items:center;
      overflow-y:scroll; 
      padding:0 40px 0px 50px;
      @media (max-width: 780px)  {
         padding:10px;
         
      } 
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
   position:relative;
   background-position:center;
   background-repeat:no-repeat;
   background-size: cover;
   overflow:hidden;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   margin-bottom:50px;
   margin-right:auto;
   @media (max-width: 780px)  {
      width:47%;
      
   } 

   @media (max-width: 570px)  {
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




const ProjectGrid = ({openProjectModal}) => {
   let profProjectGridHtml = false;
   let projectGridHtml = false;
   let key = 0;

   // Create project grids
   const createProjectGrid = () => {
      let tempHtml = [];
   
      personalProjectInfo.forEach(project => {
         let projectID = key;
         tempHtml =  [...tempHtml,(
            <ProjectWrapper  key={key} onClick={()=>openProjectModal(projectID)} style={{backgroundImage: `url(${project.image_a})`}}>
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
      return tempHtml;
   }

   const createProfProjectGrid = () => {
      let tempHtml = [];

      professionalProjectInfo.forEach(project => {
         let projectID = key;
         tempHtml =  [...tempHtml,(
            <ProjectWrapper  key={key} onClick={()=>openProjectModal(projectID)} style={{backgroundImage: `url(${project.image_a})`}}>
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
               {(profProjectGridHtml)
                  ? profProjectGridHtml
                  : <></>
               }
               <h2 className="categoryTitle">Personal Projects</h2>
               {(projectGridHtml)
                  ? projectGridHtml
                  : projectGridHtml
               }
            </div>
         </Wrapper>    
      </AnimatePresence>
   )
}


export default ProjectGrid;