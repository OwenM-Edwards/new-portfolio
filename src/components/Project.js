import React  from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import stockWebsite from "../img/stockWebsite.png"

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Wrapper = styled(motion.div)`
   width:90%;
   height:100%;
   display:flex;
   flex-direction:column;
   position: absolute;
   margin-left:10%;
   z-index:2;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);      
   background-color:#1d1d1d;
   border-radius:0 0 10px ;
   padding:10px 2px 10px 5px;
   
   & .slider{
      max-height:80%;
      border-radius:10px;
      width:100%;
      margin-top:70px;
      & img {
         width:100%;
         object-fit: contain;

      }
   }

   & .project {
      width:100%;
      height:100%;
      color:white;
      display:flex;
      flex-direction:column;
      padding:0px 30px 10px 30px;
      

      & h2 {
         width:100%;
         margin-bottom:0px;
         font-size:2rem;
      }

      & p {
         margin-bottom:20px;
         font-size:1.2rem;
      }
      & .buttonContainer {
         display:flex;
         flex-direction:row;
         justify-content:space-between;
         width:70%;
         height:70px;
         margin:auto auto 0 auto;
         /* background-color:red; */
         gap:10px;
         & button {
            border:0;
            height:100%;
            width:50%;
            background-color:#ff4338;
            border-radius:5px;
            transition:all 0.5s;
            cursor: pointer;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:1rem;
            &:hover {
               background-color:#fc5a51;
            }
         }
      }
   }
`
const projects = [
   <div className="project">
      <h2>Student Psychiatry</h2>

      <Carousel className="slider" plugins={['arrows']}>
         <div><img src={stockWebsite}/></div>
         <div><img src={stockWebsite}/></div>
         <div><img src={stockWebsite}/></div>
      </Carousel>
      
      
      <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>
      <div className="buttonContainer">
         <button>github</button>
         <button>demo</button>
      </div>
   </div>,

   <div className="project">
      <h2>Community NPC Generator</h2>
      <img className="projectImage" src={stockWebsite}/> 
      <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>
      <div className="buttonContainer">
         <button>github</button>
         <button>demo</button>
      </div>
   </div>,

   <div className="project">
      <h2>Oakfield Photography</h2>
      <img className="projectImage" src={stockWebsite}/> 
      <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>
      <div className="buttonContainer">
         <button>github</button>
         <button>demo</button>
      </div>
   </div>,

   <div className="project">
      <h2>Myth-Des</h2>
      <img className="projectImage" src={stockWebsite}/> 
      <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>
      <div className="buttonContainer">
         <button>github</button>
         <button>demo</button>
      </div> 
   </div>,
]

const Project = ({displayProject, projectsDirection}) => {

   return(
      // initial={ projectsDirection ? { y: `+100vh` } : { y: `-100vh` } }
      <AnimatePresence initial={false}>
         <Wrapper
            key={displayProject}
            initial={ {y: `+100vh` }}
            animate={{y: 0}}
            exit={{opacity: 0}}
            transition={{
               y: { type: "spring", stiffness: 800, damping: 90 }
            }}
         >
            {projects[displayProject]}
         </Wrapper>    
      </AnimatePresence>
   )
}


export default Project;