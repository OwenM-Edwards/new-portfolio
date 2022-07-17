import React, { useState, useEffect, useCallback }  from 'react';
import styled, { keyframes } from "styled-components";
import {useHistory} from 'react-router-dom';
import {LinksContainer, Project, ProjectGrid, MobileBurger, MobileMenu} from '../components/index';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import { WrapperSrc } from '../styled/styles';


const unfoldIn = keyframes`
   0% {
      transform:scaleY(.015) scaleX(0);
      background-color: #ff4338;
   }
   23% {
      background-color: #ff4338;
   }
   50% {
      transform:scaleY(.015) scaleX(1);
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
     transform:scaleY(.015) scaleX(1);
     
   }
   99% {
      background-color: #ff4338;
   }
   100% {
     transform:scaleY(.015) scaleX(0);
 
   }
`


const Wrapper = styled(WrapperSrc)`
   z-index:9999;
   
   & .contentContainer {
      padding:20px 0 20px 0;
      margin:0 auto;

      @media (max-width: 900px)  {
         padding:20px 20px 20px 20px;
      } 

      & .resumeIcon {
         position:absolute;
         top:25px;
         right:10%;
         cursor: pointer;
         z-index:3;
      }

      & .headerContainer {
         border-radius:0!important;
      }


      & .projectsContainer {
         width:100%;
         height:100%;
         /* max-height:100vh; */
         display:flex;
         flex-direction:row;
         position:relative;
         overflow:hidden;
      }
   }
`


const Projects = ({enterDirection, globalSlideAnimationDuration, setMainInitial, width, setOpenMobileMenu ,openMobileMenu}) => {
   const [exitDirection, setExitDirection] = useState(false);
   const history = useHistory();
   const [totalProjects, setTotalProjects] = useState();
   const [displayProject, setDisplayProject] = useState(-1);
   const [modalAnimation, setModalAnimation] = useState(unfoldIn)


   const handlePageChange = (page) => {
      if(page === '/home'){
         setMainInitial(true);
         setExitDirection(true)
      }
      else {
         setExitDirection(false)
      }
      history.push(page);
   }

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

   

   return(
      <Wrapper
         initial={
            enterDirection 
            ? width <= 900 ? { y: `+100vh` } : { x: `+100vw` }
            : width <= 900 ? { y: `-100vh`  }: { x: `-100vw` }
         }
         animate={ width <= 900 ? {y: 0} : {x: 0} }
         exit={
            exitDirection 
            ? width <= 900 ? { y: `+100vh` } : { x: `+100vw` }
            : width <= 900 ? { y: `-100vh`  }: { x: `-100vw` }
         }
         transition={{
            x: { type: "easeInOut", duration:globalSlideAnimationDuration }
         }}
      >

         {/* <BgNoiseSrc></BgNoiseSrc> */}
         <ReactTooltip />
         <div onClick={()=>handlePageChange('/home')} className="projectLink projectLink-a" ><p>Home</p></div>
            <div className="contentContainer">
               <div className="headerContainer" onClick={()=>closeProjectModal()}>
                  <LinksContainer/>
                  <h1>Some of my projects</h1>
                  <MobileBurger openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
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
                  <ProjectGrid  openProjectModal={openProjectModal} setTotalProjects={setTotalProjects}/>
               </div>
            </div>
         <div onClick={()=>handlePageChange('/contact')} className="projectLink projectLink-b" ><p>Contact</p></div>
         <MobileMenu setOpenMobileMenu={setOpenMobileMenu} handlePageChange={handlePageChange} openMobileMenu={openMobileMenu} />
      </Wrapper>
   )
}


export default Projects;