import React, { useState, useEffect }  from 'react';
import styled, {keyframes} from "styled-components";
import { motion } from "framer-motion"
import {useHistory} from 'react-router-dom';
import { Project, ProjectsNav } from '../components/index';
import noiseBG from '../img/noise.png';
import Fade from 'react-reveal/Fade';
import {LinksContainer} from '../components/index';
import { useSwipeable } from 'react-swipeable';

const grain = keyframes`
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) }
`


const Wrapper = styled(motion.div)`
   width:100%;
   margin:0 auto;
   height:100%;
   display:flex;
   flex-direction:row;
   justify-content:center;
   position: absolute;

   & .contentContainer {
      height:100%;
      width:100%;
      flex-grow:1;
      display:flex;
      flex-direction:column;
      background-color:#950d0f;
      padding:20px;
      justify-content:center;
      align-items:center;
      
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

      & .headerContainer {
         width:98%;
         background-color:#1d1d1d;
         border-radius:20px 20px 0px 0;
         z-index:3;
         border-bottom:2px solid #950d0f;
         @media (max-width: 700px) {
            width:100%;
         }
         & h1 {
            color:white;
            font-size:3.9rem;
            padding:40px;
            margin:0 auto;
            text-align:center;
            padding-left:10%;
            @media (max-width: 700px) {
               font-size:1.3rem;
               padding:10px;
            }
         }
      }


      & .projectsContainer {
         width:98%;
         height:100%;
         position: relative;
         display:flex;
         flex-direction:row;
         justify-content:space-between;
         @media (max-width: 700px) {
            width:100%;
         }
      }
      &:after {
         content: "";
         background-image:url(${noiseBG});
         height: 300%;
         width: 300%;
         position: fixed;
         top: -100%;
         left: -50%;
         animation: 8s ${grain} steps(10) infinite;
         z-index:1;
         opacity:0.5;
      }
   }
   & .link {
      cursor: pointer;
      text-orientation: mixed;
      color:white;
      text-align:center;
      letter-spacing:25px;
      text-decoration:none;
      border-left:2px solid #950d0f;
      border-right:1px solid #950d0f;
      width:5%;
      max-width:60px;
      height:100%;
      background-color:#ff4338;
      -webkit-touch-callout: none; 
      -webkit-user-select: none; 
      -khtml-user-select: none; 
      -moz-user-select: none;
      -ms-user-select: none; 
      user-select: none;
      z-index:3;
      opacity:1;
      font-size:1.2rem;
      padding:5px;
      padding-right:10px;
      transition:background-color 0.2s ease-in-out;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      @media (max-width: 700px) {
         width:10%;
         font-size:0.8rem;
         max-width:80px;
      }
      &:hover {
        background-color:#fc5a51;
      }
   }
   & .link-a {
      margin-right:auto;
      writing-mode: vertical-rl;
      @media (max-width: 700px) {
         padding:0px 5px 0 0;
      }
   }
   & .link-b {
      writing-mode: vertical-rl;
      @media (max-width: 700px) {
         padding:0px 0px 0 5px;
      }
   }
`



const Projects = ({enterDirection}) => {
   const [[direction, exiting], setPage] = useState([false, false]);
   const history = useHistory();
   const [[projectsDirection, displayProject], setDisplayProject] = useState([true,0])

   const handlers = useSwipeable({
      onSwipedLeft: () => {
        history.push('/contact')
      },
      onSwipedRight: () => {
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
      console.log(`testing ${exitDirection}`)
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
            x: { type: "linear", stiffness: 300, damping: 30 }
         }}
      >
         
         <div onClick={()=>handleExitStyle('left')} className="link link-a" ><p>Home</p></div>
         
            <div className="contentContainer">
               <div className="headerContainer">
                  <LinksContainer/>
                  <Fade top><h1>Some of my projects</h1></Fade>
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
        
         

         <div onClick={()=>handleExitStyle('right')} className="link link-b" ><p>Contact</p></div>
      
      </Wrapper>
   )
}


export default Projects;