import React, { useState, useEffect }  from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import {useHistory} from 'react-router-dom';

const Wrapper = styled(motion.div)`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  background-color:yellow;
  border:5px solid black;
  position: absolute;
   & .contentContainer {
      height:100%;
      width:90%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:50px;
      & .projectContainer {
         width:100%;
         height:100%;
         background-color:red;
         display:flex;
         flex-wrap:wrap;
         & .project {
            width:50%;
            height:50%;
            background-color:blue;
            border: 1px solid red;
         }
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
      width:5%;
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
      padding-left:5px;
   }
   & .link-b {
      writing-mode: vertical-rl;
      padding-right:5px;
   }
`


const Projects = ({enterDirection}) => {
   const [[direction, exiting], setPage] = useState([false, false]);
   const history = useHistory();

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
            x: { type: "spring", stiffness: 300, damping: 30 }
         }}
      >

         <div onClick={()=>handleExitStyle('left')} className="link link-a" ><p>Main</p></div>
         <div className="contentContainer">
            
            <h1>PROJECTS</h1>
            <div className="projectContainer">
               <div className="project"></div>
               <div className="project"></div>
               <div className="project"></div>
               <div className="project"></div>
            </div>
            
         </div>
         <div onClick={()=>handleExitStyle('right')} className="link link-b" ><p>Contact</p></div>
      
      </Wrapper>
   )
}


export default Projects;