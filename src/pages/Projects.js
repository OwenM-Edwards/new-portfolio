import React, { useState, useEffect }  from 'react';
import styled, {keyframes} from "styled-components";
import { motion } from "framer-motion"
import {useHistory} from 'react-router-dom';
import { Project, ProjectsNav } from '../components/index';
import Fade from 'react-reveal/Fade';
import {LinksContainer} from '../components/index';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import { WrapperSrc, BgNoiseSrc } from '../styled/styles';


const Wrapper = styled(WrapperSrc)`
overflow:hidden;
   & .contentContainer {
      padding:20px 90px;
      margin:0 auto;


      @media (max-width: 700px) {
         padding:8px 8px 5px 8px;
      }

      & .resumeIcon {
         position:absolute;
         top:25px;
         right:10%;
         cursor: pointer;
         z-index:3;
      }


      & .projectsContainer {
         width:100%;
         height:100%;
         position: relative;
         display:flex;
         flex-direction:row;
         justify-content:space-between;
         @media (max-width: 700px) {
            width:100%;
         }
      }
   }
`



const Projects = ({enterDirection, globalSlideAnimationDuration}) => {
   const [[direction, exiting], setPage] = useState([false, false]);
   const history = useHistory();
   const [[projectsDirection, displayProject], setDisplayProject] = useState([true,0])
   
   const handlers = useSwipeable({
      onSwipedLeft: () => {
         handleExitStyle('right');
        history.push('/contact')
      },
      onSwipedRight: () => {
         handleExitStyle('left')
         history.push('/main')
       },
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
   });

   useEffect(()=>{

   },[])

   if(exiting){
      if(direction){
         history.push('/main')
      }
      else {
         history.push('/contact')
      }
   }

   const handleProjectsSwitch = (val) => {
      if(val < displayProject){
         setDisplayProject([true, val])
      }
      else if (val > displayProject) {
         setDisplayProject([false, val])
      }
   }

   const handleExitStyle = (exitDirection) => {
      if(exitDirection === 'left'){
         setPage([true, true])
      }
      else {
         setPage([false, true])
      }
   }


   return(
      <Wrapper
         {...handlers}
         initial={enterDirection ? { x: `+100vw` } : { x: `-100vw`  }}
         animate={{x: 0}}
         exit={direction ? { x: `+100vw` } : { x: `-100vw`  }}
         transition={{
            x: { type: "easeInOut", stiffness: 300, damping: 30, duration:globalSlideAnimationDuration }
         }}
      >
         <BgNoiseSrc></BgNoiseSrc>
         <ReactTooltip />
         <div onClick={()=>handleExitStyle('left')} className="projectLink projectLink-a" ><p>Home</p></div>
            <div className="contentContainer">
               <div className="headerContainer">
                  <LinksContainer/>
                  <h1>Some of my projects</h1>
               </div>

               <div className="projectsContainer">
                  <Project 
                     displayProject={displayProject} 
                     projectsDirection={projectsDirection}
                  />
                   <ProjectsNav 
                     handleProjectsSwitch={handleProjectsSwitch}
                     displayProject={displayProject} 
                     setDisplayProject={setDisplayProject}
                  />
               </div>
            </div>
         <div onClick={()=>handleExitStyle('right')} className="projectLink projectLink-b" ><p>Contact</p></div>
      </Wrapper>
   )
}


export default Projects;