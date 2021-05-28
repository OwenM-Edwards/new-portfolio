import React from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import websiteA_BG from  "../img/website-a.jpg";
import websiteB_BG from  "../img/website-b.jpg";
import websiteC_BG from  "../img/website-c.jpg";
import websiteD_BG from  "../img/website-d.jpg";
import Fade from 'react-reveal/Fade';

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

   @media (max-width: 700px) {
      width:100%;
      padding:0px;
      margin-left:0%;
   }

   & .project {
      width:100%;
      height:100%;
      color:white;
      display:flex;
      flex-direction:column;
      padding:0px 30px 10px 30px;
      
      @media (max-width: 700px) {
         padding:50px 0px 10px 0px;
      }

      & .imageContainer {
         box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);      
         height:60%;
         width:80%;
         display:flex;
         margin: 0 auto 20px auto;
         justify-content:center;
         border-radius:10px;
         padding:5px;

         @media (max-width: 700px) {
            width:100%;
            height:30%;
         }

         & img {
            height:100%;
            object-fit:contain;
            border-radius:10px;
            @media (max-width: 700px) {
               height:auto;
               width:100%;
            }
         }
      }
      
      & h2 {
         margin:0 auto;
         font-size:2rem;
         height:10%;

         @media (max-width: 700px) {
            font-size:1rem;
         }

      }

      & p {
         margin-bottom:20px;
         font-size:1.2rem;
         height:30%;
         max-width:900px;
         margin:0 auto;


         @media (max-width: 700px) {
            font-size:1rem;
            padding:15px;
            overflow-y:scroll;
            height:30%;
            flex-grow:1;
         }
      }

      & .buttonContainer {
         display:flex;
         flex-direction:row;
         justify-content:space-between;
         width:70%;
         max-width:600px;
         height:10%;
         margin:auto auto 0 auto;
         /* background-color:red; */
         gap:10px;
         @media (max-width: 700px) {
            height:5%;
         }
         & .button {
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
            font-size:1.1rem;
            text-decoration:none;
            &:hover {
               background-color:#fc5a51;
            }
         }
      }
   }
`





const Project = ({displayProject, projectsDirection}) => {


   const projects = [
      <div className="project">
         <Fade delay={300}>
            <h2>Student Psychiatry</h2>

            <div className="imageContainer">
               <img alt="Student Psychiatry Link" src={websiteA_BG}/>
            </div>
            
            <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>
            
            <div className="buttonContainer">
               <a className="button" target="blank" href="https://github.com/OwenM-Edwards/student-psych-frontend">github</a>
               <a className="button" target="blank" href="https://www.studentpsychiatry.co.uk/calendar/5/2021">demo</a>
            </div>
         </Fade>
      </div>,
   
      <div className="project">
         <Fade delay={300}>
            <h2>Community NPC Generator</h2>

            <div className="imageContainer">
               <img alt="RPG Generator Link"src={websiteB_BG}/>
            </div>

            <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>

            <div className="buttonContainer">
            <a className="button" target="blank" href="https://github.com/OwenM-Edwards/The-Community-NPC-Generator-Front-End">github</a>
               <a className="button" target="blank" href="https://the-community-npc-generator-front-end.vercel.app/">demo</a>
            </div>
         </Fade>
      </div>,
   
      <div className="project">
         <Fade delay={300}>
            <h2>Oakfield Photography</h2>

            <div className="imageContainer">
               <img alt="Oakfield Photography" src={websiteC_BG}/>
            </div>

            <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>

            <div className="buttonContainer">
               <a className="button" target="blank" href="https://github.com/OwenM-Edwards/Oakfield-Photography">github</a>
               <a className="button" target="blank" href="https://www.oakfield-photography.com/">demo</a>
            </div>
         </Fade>
      </div>,
   
      <div className="project">
         <Fade delay={300}>
            <h2>Myth-Des</h2>

            <div className="imageContainer">
               <img alt="Myth-des link" src={websiteD_BG}/>
            </div>


            <p>lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh  lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh lorem ipsure blah blach duh </p>

            <div className="buttonContainer">
            <a className="button" target="blank" href="https://github.com/OwenM-Edwards/fic_design_comp">github</a>
               <a className="button" target="blank" href="http://www.owenedwards.me/fic_design_comp/">demo</a>
            </div> 
         </Fade>
      </div>,
   ]

   return(
      <AnimatePresence initial={false}>
         <Wrapper
            key={displayProject}

         >
            {projects[displayProject]}
         </Wrapper>    
      </AnimatePresence>
   )
}


export default Project;