import React from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import websiteA_BG from  "../img/website-a.jpg";
import websiteB_BG from  "../img/website-b.jpg";
import websiteC_BG from  "../img/website-c.jpg";
import websiteD_BG from  "../img/website-d.jpg";
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

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
      padding:0px 30px 0px 30px;
      
      @media (max-width: 700px) {
         padding:50px 0px 10px 0px;
      }

      & .imageContainer {
         box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);      
         height:60%;
         width:100%;
         display:flex;
         margin: 0 auto 20px auto;
         justify-content:center;
         border-radius:10px;
         padding:5px;

         & .lazyLoad {
            display:flex;
            justify-content:center;
         }

         @media (max-width: 700px) {
            width:100%;
            height:40%;
            margin-bottom:-0px;
         }

         & img {
            height:100%;
            object-fit:contain;
            border-radius:10px;
            max-width:100%;
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
         -webkit-user-select: none; /* Safari */        
         -moz-user-select: none; /* Firefox */
         -ms-user-select: none; /* IE10+/Edge */
         user-select: none; /* Standard */
         @media (max-width: 700px) {
            font-size:1rem;
         }

      }

      & p {
         font-size:1.2rem;
         height:30%;
         width:95%;
         max-width:900px;
         margin:0 auto;
         padding:10px;
         overflow-y:scroll;
         @media (max-width: 700px) {
            font-size:1rem;
            padding:15px;
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
         margin:15px auto 0 auto;
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
            @media (max-width: 700px) {
               font-size:0.9rem;
               padding:10px;
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
               <LazyLoad className="lazyLoad">
                  <img alt="Student Psychiatry Link" src={websiteA_BG}/>
               </LazyLoad>
            </div>
            
            <p>
               Student psychiatry was initially designed to help students securly organise online events during Covid lockdown. Event organisers must register using an approved email domain to add their own events. Each event has public links, for anyone to view, and private links which can only be viewed by registered users. This helps organiser protect their open event links.<br />The front end was built using React, and the back end with Nodejs.
            </p>
            
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
               <LazyLoad className="lazyLoad">
                  <img alt="RPG Generator Link"src={websiteB_BG}/>
               </LazyLoad>
            </div>

            <p>An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use.</p>

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
               <LazyLoad className="lazyLoad">
                  <img alt="Oakfield Photography" src={websiteC_BG}/>
               </LazyLoad>
            </div>

            <p>Created for a local photography company using simple Javascript and CSS. Gallery images are hosted on Cloudinary.</p>

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
               <LazyLoad className="lazyLoad">
                  <img alt="Myth-des link" src={websiteD_BG}/>
               </LazyLoad>
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