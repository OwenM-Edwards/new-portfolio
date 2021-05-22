import React, { useState, useEffect }  from 'react';
import styled from "styled-components";
import { motion } from "framer-motion"
import {useHistory} from 'react-router-dom';
import { Project, ProjectsNav } from '../components/index';

const Wrapper = styled(motion.div)`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  background-color:#0e1c2c;
  border:5px solid black;
  position: absolute;
   & .contentContainer {
      height:100%;
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      & .projectsContainer {
         width:98%;
         height:80%;
         position: relative;
         display:flex;
         flex-direction:row;
         justify-content:space-between;
      }
   }
   & .link {
      cursor: pointer;
      text-orientation: mixed;
      color:white;
      text-align:center;
      letter-spacing:30px;
      text-decoration:none;
      border:2px solid white;
      min-width:30px;
      width:2%;
      max-width:50px;
      height:100%;
      background-color:black;

      -webkit-touch-callout: none; 
      -webkit-user-select: none; 
      -khtml-user-select: none; 
      -moz-user-select: none;
      -ms-user-select: none; 
      user-select: none;
   }
   & .link-a {
      margin-right:auto;
      writing-mode: sideways-lr;


   }
   & .link-b {
      writing-mode: vertical-rl;

   }
`



const Projects = ({enterDirection}) => {
   const [[direction, exiting], setPage] = useState([false, false]);
   const history = useHistory();
   const [[projectsDirection, displayProject], setDisplayProject] = useState([true,0])

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
         console.log(`exiting ${exiting}`)
         setPage([true, true])
      }
      else {
         console.log(`exiting ${exiting}`)
         setPage([false, true])
      }
   }


   return(
      <Wrapper
         initial={enterDirection ? { x: `+100vw` } : { x: `-100vw`  }}
         animate={{x: 0}}
         exit={direction ? { x: `+100vw` } : { x: `-100vw`  }}
         transition={{
            x: { type: "linear", stiffness: 300, damping: 30 }
         }}
         onScroll={()=>console.log('hello')}
      >

         <div onClick={()=>handleExitStyle('left')} className="link link-a" ><p>Main</p></div>

         <div className="contentContainer">
            <h1>PROJECTS</h1>
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