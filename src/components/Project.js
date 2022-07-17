import React from 'react';
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import projectInfo from '../portfolio projects/projects';
import professionalProjectInfo from '../portfolio projects/professionalProjects';
import closeIcon from '../img/close.png';
import closeIconRed from '../img/closeRed.png';
import arrowLeft from '../img/arrowBack.png';
import arrowLeftRed from '../img/arrowBackRed.png';
import arrowRight from '../img/arrowForward.png';
import arrowRightRed from '../img/arrowForwardRed.png';
import Fade from 'react-reveal/Fade';
import {TypescriptIcon, nodeIcon, bootstrapIcon,wordpressIcon,phpIcon, reactIcon,sassIcon, postgresIcon, cssIcon, jsIcon, githubIcon,CVIcon,}  from '../img/index.js';

const fadeIn = keyframes`
   0% {
     opacity:0;
   }
   40% {
     opacity:0;
   }
   100% {
     opacity:100%;
   }
`
const fadeOut = keyframes`
   0% {
     opacity:100%;
   }
   100% {
     opacity:0;
   }
`
const rotateEnter = keyframes`
   0% {
      transform: rotate(0deg);
   }
   40% {
      transform: rotate(105deg);
   }
   100% {
      transform: rotate(90deg);
   }
`

const rotateExit = keyframes`
   0% {
      transform: rotate(90deg);
   }
   40% {
      transform: rotate(105deg);
   }
   100% {
      transform: rotate(0deg);
   }
`





const Wrapper = styled(motion.div)`
   width:100%;
   height:100%;
   display:flex;
   /* padding:0 2px 5px 5px; */
   position:absolute;
   z-index:9999999999;
   top:0;
   left:0;
   animation-name: ${props => props.modalAnimation};
   animation-duration: 1s;
   animation-iteration-count: 1;
   background-color: red;
   justify-content:center;
   background-color: rgba(0, 0, 0, 1);
`

const LeftArrow = styled.div`
   width:50px;
   height:50px;
   top:45%;
   right:100%;
   z-index:9999999;
   position:absolute;
   cursor:pointer;
   transition:transform 0.2s ease-in-out;
   @media (max-width: 900px){
      display:none;
   }
   &:hover {
      transform: scale(0.9); 
   }
   & img {
      width:100%;
   }
`
const RightArrow = styled.div`
   width:50px;
   height:50px;
   top:45%;
   left:100%;
   z-index:9999999;
   position:absolute;
   cursor:pointer;
   transition:transform 0.2s ease-in-out;
   @media (max-width: 900px){
      display:none;
   }
   &:hover {
      transform: scale(0.9); 
   }
   & img {
      width:100%;
   }
`

const CloseIcon = styled.div`
   width:40px;
   height:40px;
   position:absolute;
   top:30px;
   left:calc(100% + 2px);
   cursor:pointer;
   z-index:9999999;
   animation-name: ${rotateExit};
   animation-duration: 0.5s;
   animation-iteration-count: 1;
   display:flex;
   justify-content:center;
   align-items:center;
   align-content:center;
   img {
      width:100%;
   }

   
   &:hover {
      animation-name: ${rotateEnter};
      animation-duration: 0.4s;
      animation-iteration-count: 1;
      -webkit-animation-fill-mode: forwards;
   }
`
const ProjectWrapper = styled.div`
   width:70%;
   height:100%;
   color:white;
   position:relative;
   background-color:${props => props.theme.offBlack};
   @media (max-width: 900px){
      width:100%;
   }
   .fadeContainer {
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      overflow-y:scroll;
      overflow-x:hidden;
      padding:40px;
      @media (max-width: 900px){
         padding:70px;
      }
         
      .section1 {
         width:100%;
         height:100px;
         /* padding:20px 20px 50px 20px; */
         text-align:center;
         margin-bottom:30px;
         h2 {
            font-size:2.3rem;
         }
      }

      .section2 {
         width:100%;
         height:300px;
         display:flex;
         justify-content:space-between;
         margin-bottom:40px;
         @media (max-width: 1320px){
            justify-content:center;
         }
         img {
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
         
         }
         img:nth-of-type(2){
            @media (max-width: 1320px){
               display:none;
            }
         }
      }

      .section3 {
         width:100%;
         display:flex;
         flex-wrap:wrap;

         .infoContainer {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:flex-end;
            width:90%;
            margin-bottom:30px;
            max-width:900px;
            @media (max-width: 900px){
               width:100%;
            }
            p {
               margin-bottom:20px;
            }
         }

         .skillContainer {
            width:10%;
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            margin-left:auto;
            @media (max-width: 900px){
               display:none;
            }
            img {
               width:50px;
               margin-bottom:10px;
            }
         }
         
         .buttonContainer {
            width:100%;
            display:flex;
            align-items:flex-end;
            padding-bottom:20px;
            justify-content:center;
            a {
               border:0;
               height:60px;
               width:300px;
               background-color:${props => props.theme.popColor};
               border-radius:5px;
               transition:all 0.5s;
               cursor: pointer;
               color:white;
               display:flex;
               justify-content:center;
               align-items:center;
               font-size:1.3rem;
               text-decoration:none;
               margin-right:20px;
               @media (max-width: 700px), (max-height:700px) {
                  width:100%;
               }
               
               &:hover {
                  background-color:#fc5a51;
               }
            }

         }
      }
   }

   .fadeIn {
      animation-name: ${fadeIn};
      animation-duration:2s;
      animation-iteration-count: 1;
   }
   .fadeOut {
      animation-name: ${fadeOut};
      animation-duration:0.5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
   }
`


const Project = ({displayProject, modalAnimation, closeProjectModal, setDisplayProject, totalProjects}) => {
   let projectHtml = false;

   const updateDisplayProject = (e) => {
      document.querySelector('.fadeContainer').classList.remove('fadeIn');
      document.querySelector('.fadeContainer').classList.add('fadeOut');
      setTimeout(f => {
         if(e > totalProjects) {
            e = 0;
            setDisplayProject(e);
         }
         else if(e < 0 ) {
            e = totalProjects;
            setDisplayProject(e);
         }
         else {
            setDisplayProject(e);
         }
      },200)
   }

   const handleCloseModal = () => {
      document.querySelector('.fadeContainer').classList.remove('fadeIn');
      document.querySelector('.fadeContainer').classList.add('fadeOut');
      closeProjectModal();
   }
   

   // Create full project modal
   const createProjects = () => {
      let key = 0;
      let tempHtml = [];
      projectInfo.forEach(project => {
         tempHtml =  [...tempHtml,(
            <ProjectWrapper key={key}>
               <div className="fadeContainer fadeIn">
                  <CloseIcon onClick={()=>handleCloseModal()}><img src={closeIconRed}/></CloseIcon>
                  <LeftArrow onClick={()=>updateDisplayProject(displayProject - 1)} ><Fade delay={1000} duration={400} right><img src={arrowLeftRed}/></Fade></LeftArrow>
                  <RightArrow onClick={()=>updateDisplayProject(displayProject + 1)}><Fade delay={1000} duration={400} left><img src={arrowRightRed}/></Fade></RightArrow>
                  
                  <section className="section1">
                     <h2>{project.title}</h2>
                  </section>

                  <section className="section2">   
                     <img src={project.image}/>
                  </section>

                  <section className="section3">
                     <div className="infoContainer">
                        <p>
                           {project.info}
                        </p>
                     </div>

                     <div className="buttonContainer">
                        <a className="button" target="blank" href={project.githubLink}>Github</a>
                        <a className="button" target="blank" href={project.demoLink}>View site</a>
                     </div>
                  </section>
               </div>
            </ProjectWrapper>
         )];
         key++;
      });
      professionalProjectInfo.forEach(project => {
         tempHtml =  [...tempHtml,(
            <ProjectWrapper key={key}>
               <div className="fadeContainer fadeIn">
                  <CloseIcon onClick={()=>handleCloseModal()}><img src={closeIconRed}/></CloseIcon>
                  <LeftArrow onClick={()=>updateDisplayProject(displayProject - 1)} ><Fade delay={1000} duration={400} right><img src={arrowLeftRed}/></Fade></LeftArrow>
                  <RightArrow onClick={()=>updateDisplayProject(displayProject + 1)}><Fade delay={1000} duration={400} left><img src={arrowRightRed}/></Fade></RightArrow>
                  
                  <section className="section1">
                     <h2>{project.title}</h2>
                  </section>

                  <section className="section2">   
                     <img src={project.image}/>
                     <img src={project.image}/>
                  </section>

                  <section className="section3">
                     <div className="infoContainer">
                        <p>
                           {project.info}
                        </p>

                        <p>
                           {project.info}
                        </p>

                        <p>
                           {project.info}
                        </p>
                     </div>

                     <div className="skillContainer">
                        <img src={jsIcon}/>
                        <img src={jsIcon}/>
                        <img src={jsIcon}/>
                     </div>

                     <div className="buttonContainer">
                        <a className="button" target="blank" href={project.githubLink}>Github</a>
                        <a className="button" target="blank" href={project.demoLink}>View site</a>
                     </div>
                  </section>
               </div>
            </ProjectWrapper>
         )];
         key++;
      });
      return tempHtml;
   }
   if(!projectHtml){
      projectHtml = createProjects();
   }


   return(
      <AnimatePresence initial={false}>
         {displayProject > -1
            ?  <Wrapper modalAnimation={modalAnimation}>
                  {projectHtml[displayProject]}

                  {/* <ProjectWrapper>
                     <div className="fadeContainer fadeIn">
                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>

                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>

                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>

                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>

                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>

                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>

                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>

                        <p>
                        The Community NPC Gen is a random character creator for us in tabletop games. An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use. This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.
                        </p>
                     </div>
                  </ProjectWrapper> */}
               </Wrapper> 
            : <></>
         } 
      </AnimatePresence>
   )
}
   

export default Project;