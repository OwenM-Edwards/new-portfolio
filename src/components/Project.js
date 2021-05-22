import React  from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import stockWebsite from "../img/stockWebsite.png"
const Wrapper = styled(motion.div)`
   width:90%;
   height:100%;
   background-color:red;
   display:flex;
   flex-wrap:wrap;
   position: absolute;
   margin-left:10%;
   & .project {
      width:100%;
      height:100%;
      background-color:blue;
      border: 1px solid red;
      color:white;
      display:flex;
      flex-direction:column;
      padding:30px;
      

      & h2 {
         width:100%;
         margin-bottom:20px;
      }
      & .projectImage {
         background-color:orange;
         height:50%;
         width:100%;
         object-fit: cover;
         object-position: contain;
         margin-bottom:20px;
      }
      & p {
         margin-bottom:20px;
      }
      & .buttonContainer {
         display:flex;
         flex-direction:row;

         padding:0 30px;
         justify-content:space-between;
         width:50%;
         background-color:red;
         margin:auto auto 0 auto;
         & button {
            width:40%;
            height:100px;
            border-radius:5px;
         }
      }
   }
`
const projects = [
   <div className="project">
      <h2>Test Website</h2>
      <img className="projectImage" src={stockWebsite}/> 
      <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>
      <div className="buttonContainer">
         <button>github</button>
         <button>demo</button>
      </div>
   </div>,

   <div className="project">
      <h2>2</h2>
      <div className="projectImage">
      </div>  
   </div>,

   <div className="project">
      <h2>3</h2>
      <div className="projectImage">
      </div>  
   </div>,

   <div className="project">
      <h2>4</h2>
      <div className="projectImage">
      </div>  
   </div>,
]

const Project = ({displayProject, projectsDirection}) => {
   console.log(projectsDirection)

   
   return(
      
      <AnimatePresence initial={false}>
         <Wrapper
            key={displayProject}
            initial={ projectsDirection ? { y: `+100vh` } : { y: `-100vh` } }
            animate={{y: 0}}
            exit={{opacity: 0}}
            transition={{
               y: { type: "spring", stiffness: 300, damping: 30 }
            }}
         >
            {projects[displayProject]}
         </Wrapper>    
      </AnimatePresence>
   )
}


export default Project;