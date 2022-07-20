import React from 'react';
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import personalProjectInfo from '../portfolio projects/personalProjects';
import professionalProjectInfo from '../portfolio projects/professionalProjects';
import closeIconRed from '../img/closeRed.png';
import arrowLeftRed from '../img/arrowBackRed.png';
import arrowRightRed from '../img/arrowForwardRed.png';
import Fade from 'react-reveal/Fade';
import {TypescriptIcon, nodeIcon, bootstrapIcon,wordpressIcon,phpIcon, reactIcon,sassIcon, postgresIcon, cssIcon, jsIcon, githubIcon,CVIcon,}  from '../img/index.js';
import ReactTooltip from 'react-tooltip';

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
   z-index:9999999999999999;
   animation-name: ${rotateExit};
   animation-duration: 0.5s;
   animation-iteration-count: 1;
   display:flex;
   justify-content:center;
   align-items:center;
   align-content:center;
   @media (max-width: 900px){
      top:80px;
      right:40px;
   }
   img {
      width:100%;
      z-index:99999999999999999;
   }
   &:hover {
      animation-name: ${rotateEnter};
      animation-duration: 0.4s;
      animation-iteration-count: 1;
      -webkit-animation-fill-mode: forwards;
   }
`
const ProjectWrapper = styled.div`
   width:80%;
   height:100%;
   color:white;
   position:relative;
   background-color:${props => props.theme.offBlack};
   max-width:1200px;
   @media (max-width: 900px){
      width:100%;
   }
   .fadeContainer {
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      overflow-y:auto;
      overflow-x:hidden;
      padding:40px;
      /* background-color:red; */
      @media (max-width: 900px){
         padding:70px;
      }
      @media (max-width: 600px){
         padding:30px;
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
         height:350px;
         display:flex;
         justify-content:space-around;
         margin-bottom:40px;
         @media (max-width: 1320px){
            justify-content:center;
         }
         img {
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            
            height:100%;
         }
         img:nth-of-type(2){
            @media (max-width: 1320px){
               display:none;
            }
         }
      }

      
      .skillContainer {
         display:flex;
         /* flex-direction:column; */
         align-items:center;
         height:fit-content;
         justify-content:center;
         border-bottom:2px solid ${props => props.theme.popColor};
         align-self:center;

         width:80%;
         max-width:800px;
         @media (max-width: 900px){
            display:none;
         }
         img {
            width:50px;
            margin-right:40px;
            margin-bottom:20px;
         }
      }

      .section3 {
         width:100%;
         display:flex;
         flex-wrap:wrap;
         flex-grow:1;
         margin-top:50px;
         justify-self:center;
         align-self:center;

         .infoContainer {
            display:flex;
            flex-direction:column;
            /* justify-content:center; */
            align-items:flex-end;
            width:80%;
            margin-bottom:30px;
            max-width:800px;
            justify-self:center;
            align-self:center;
            margin:0 auto 30px auto;
            @media (max-width: 900px){
               width:100%;
            }
            p {
               margin-bottom:20px;
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
      let key2 = -1;
      let tempHtml = [];
      personalProjectInfo.forEach(project => {
         let skillIconHTML = [];
         project.skillIcons.forEach(icon => {
            skillIconHTML =  [...skillIconHTML,(
               <span key={key2}>{icon}</span>
            )]
            key2--;
         });

         tempHtml =  [...tempHtml,(
            <ProjectWrapper key={key}>
               <div className="fadeContainer fadeIn">
                  <CloseIcon onClick={()=>handleCloseModal()}><img src={closeIconRed} alt="close"/></CloseIcon>
                  <LeftArrow onClick={()=>updateDisplayProject(displayProject - 1)} ><Fade delay={1000} duration={400} right><img src={arrowLeftRed} alt="right"/></Fade></LeftArrow>
                  <RightArrow onClick={()=>updateDisplayProject(displayProject + 1)}><Fade delay={1000} duration={400} left><img src={arrowRightRed} alt="left"/></Fade></RightArrow>
                  
                  <section className="section1">
                     <h2>{project.title}</h2>
                  </section>

                  <section className="section2">   
                     <img src={project.image_a} alt="project 1"/>
                     <img src={project.image_b} alt="project 2"/>
                  </section>

                  <div className="skillContainer">
                     {(skillIconHTML)
                        ?   skillIconHTML
                        :   <></>
                     }  
                  </div>

                  <section className="section3">
                     <div className="infoContainer">
                        <p>
                           {project.info_a}
                        </p>

                        {(project.info_b)
                           ?   <p> {project.info_b} </p>
                           :   <></>
                        }

                        {(project.info_c)
                           ?   <p> {project.info_c} </p>
                           :   <></>
                        }  
                     </div>

  
                    
                        <ReactTooltip />
                     <div className="buttonContainer">
                        {(project.githubLink)
                           ? <a className="button" target="blank" href={project.githubLink}>Github</a>
                           : <></>
                        }
                        <a className="button" target="blank" href={project.demoLink}>View site</a>
                     </div>
                  </section>
               </div>
            </ProjectWrapper>
         )];
         key++;
      });
      professionalProjectInfo.forEach(project => {
         let skillIconHTML = [];
         project.skillIcons.forEach(icon => {
            skillIconHTML =  [...skillIconHTML,(
               <span key={key2}>{icon}</span>
            )]
            key2--;
         });

         tempHtml =  [...tempHtml,(
            <ProjectWrapper key={key}>
               <div className="fadeContainer fadeIn">
                  <CloseIcon onClick={()=>handleCloseModal()}><img src={closeIconRed} alt="close"/></CloseIcon>
                  <LeftArrow onClick={()=>updateDisplayProject(displayProject - 1)} ><Fade delay={1000} duration={400} right><img src={arrowLeftRed} alt="arrow left"/></Fade></LeftArrow>
                  <RightArrow onClick={()=>updateDisplayProject(displayProject + 1)}><Fade delay={1000} duration={400} left><img src={arrowRightRed} alt="arrow right"/></Fade></RightArrow>
                  
                  <section className="section1">
                     <h2>{project.title}</h2>
                  </section>

                  <section className="section2">   
                     <img src={project.image_a} alt="project 1"/>
                     <img src={project.image_b} alt="project 2"/>
                  </section>

                  <div className="skillContainer">
                     {(skillIconHTML)
                        ?   skillIconHTML
                        :   <></>
                     }  
                  </div>

                  <section className="section3">
                     <div className="infoContainer">
                        <p>
                           {project.info_a}
                        </p>

                        {(project.info_b)
                           ?   <p> {project.info_b} </p>
                           :   <></>
                        }

                        {(project.info_c)
                           ?   <p> {project.info_c} </p>
                           :   <></>
                        }  
                     </div>

        

                     <div className="buttonContainer">
                        {(project.githubLink)
                           ? <a className="button" target="blank" href={project.githubLink}>Github</a>
                           : <></>
                        }
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
               </Wrapper> 
            : <></>
         } 
      
      </AnimatePresence>
   )
}
   

export default Project;