import React, { useState, useEffect, useCallback, Suspense }  from 'react';
import styled, { keyframes } from "styled-components";
import {useHistory} from 'react-router-dom';
import { ProjectsNav } from '../components/index';
import {LinksContainer, Project, ProjectGrid} from '../components/index';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import { WrapperSrc, BgNoiseSrc } from '../styled/styles';

// const Project = React.lazy(() => import('../components/Project'));


const unfoldIn = keyframes`
   0% {
      transform:scaleY(.005) scaleX(0);
   }
   50% {
      transform:scaleY(.005) scaleX(1);
   }
   100% {
      transform:scaleY(1) scaleX(1);
   }
`
const unfoldOut = keyframes`
   0% {
     transform:scaleY(1) scaleX(1);
   }
   50% {
     transform:scaleY(.005) scaleX(1);
   }
   100% {
     transform:scaleY(.005) scaleX(0);
   }
`


const Wrapper = styled(WrapperSrc)`
   z-index:9999;
   
   & .contentContainer {
      padding:20px;
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
         max-height:100vh;
         overflow:hidden;
         display:flex;
         flex-direction:row;
         position:relative;

         @media (max-width: 700px) {
            width:100%;
         }
      }
   }
`


const Projects = ({enterDirection, globalSlideAnimationDuration, projectHtml, setMainInitial}) => {
   const [[direction, exiting], setPage] = useState([false, false]);
   const history = useHistory();
   const [totalProjects, setTotalProjects] = useState();
   const [displayProject, setDisplayProject] = useState(-1);
   const [modalAnimation, setModalAnimation] = useState(unfoldIn)


   const handlers = useSwipeable({
      onSwipedLeft: () => {
         handleExitStyle('right');
        history.push('/contact')
      },
      onSwipedRight: () => {
         setMainInitial(true);
         handleExitStyle('left')
         history.push('/main')
       },
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
   });

   // Detect esc key press and close project modal
   const escFunction = useCallback((event) => {
      if (event.key === "Escape") {
         setModalAnimation(unfoldOut);
         const timer = setTimeout(() => {
            setDisplayProject(-1)
         }, 1000);
      }
   }, []);
   // Open project modal
   const openProjectModal = (val) => {
      setModalAnimation(unfoldIn);
      setDisplayProject(val)
   }
   // Close project modal
   const closeProjectModal = () => {
      setModalAnimation(unfoldOut);
      const timer = setTimeout(() => {
         setDisplayProject(-1)
      }, 1000);
   }
  
   useEffect(() => {
      document.addEventListener("keydown", escFunction, false);
  
      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
   }, []);

   if(exiting){
      if(direction){
         history.push('/home')
      }
      else {
         history.push('/contact')
      }
   }

   const handleExitStyle = (exitDirection) => {
      if(exitDirection === 'left'){
         
         setPage([true, true])
      }
      else {
         setMainInitial(true);
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
            x: { type: "easeInOut", duration:globalSlideAnimationDuration }
         }}
      >

         {/* <BgNoiseSrc></BgNoiseSrc> */}
         <ReactTooltip />
         <div onClick={()=>handleExitStyle('left')} className="projectLink projectLink-a" ><p>Home</p></div>
            <div className="contentContainer">
               <div className="headerContainer" onClick={()=>closeProjectModal()}>
                  <LinksContainer/>
                  <h1>Some of my projects</h1>
               </div>

               <div className="projectsContainer">
                  {/* <ProjectsNav 
                     handleProjectsSwitch={handleProjectsSwitch}
                     displayProject={displayProject} 
                     setDisplayProject={setDisplayProject}
                  /> */}
                  <Project 
                     displayProject={displayProject} 
                     modalAnimation={modalAnimation}
                     closeProjectModal={closeProjectModal}
                     setDisplayProject={setDisplayProject}
                     totalProjects={totalProjects}
                  />
                  <ProjectGrid openProjectModal={openProjectModal} setTotalProjects={setTotalProjects}/>
               </div>
            </div>
         <div onClick={()=>handleExitStyle('right')} className="projectLink projectLink-b" ><p>Contact</p></div>
      </Wrapper>
   )
}


export default Projects;