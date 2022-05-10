import React from 'react';
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import projectInfo from '../portfolio projects/projects';
import closeIcon from '../img/close.png';
import arrowLeft from '../img/arrowBack.png';
import arrowRight from '../img/arrowForward.png';
import Fade from 'react-reveal/Fade';

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
   flex-wrap:wrap;
   border-radius:0 0 10px ;
   padding:0 2px 5px 5px;
   position:absolute;
   z-index:9999999999;
   top:0;
   left:0;
   animation-name: ${props => props.modalAnimation};
   animation-duration: 1s;
   animation-iteration-count: 1;
   overflow:hidden;
   /* background: rgb(29 29 29) */
   justify-content:center;
   background-color: rgba(0, 0, 0, 1);


   @media (max-width: 700px) {
      width:100%;
      padding:0px;
      margin-left:0%;
      min-height:92%;
   } 
`

const LeftArrow = styled.div`
   width:50px;
   height:50px;
   top:45%;
   right:100%;
   z-index:9999999;
   position:absolute;
   cursor:pointer;
   transition:scale 0.2s ease-in-out;

   &:hover {
      scale:0.9;
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
   transition:scale 0.2s ease-in-out;

   &:hover {
      scale:0.9;
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
   right:70px;
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
   width:60%;
   height:100%;
   color:white;
   position:relative;
   background-color:${props => props.theme.offBlack};
   @media (max-width: 1000px) {
      width:90%;
   } 

   & .fadeContainer {
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:0px 30px 0px 30px;
      
      
   }
   & .fadeIn {
      animation-name: ${fadeIn};
      animation-duration:2s;
      animation-iteration-count: 1;
   }
   & .fadeOut {
      animation-name: ${fadeOut};
      animation-duration:0.5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
   }

   @media (max-width: 700px) {
      padding:20px 0px 5px 0px;
   }
   
   & .section1 {
      width:100%;
      height:10%;
      padding:20px 20px 50px 20px;
      text-align:center;
      h2 {
         font-size:2.3rem;
      }
   }

   & .section2 {
      width:100%;
      height:60%;
      display:flex;
      justify-content:center;
      align-content:center;
      align-items:center;
      img {
         max-width: 100%;
         max-height: 500px;
         object-fit:contain;
         box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      }
      
   }

   & .section3 {
      width:60%;
      max-width:750px;
      height:30%;
      display:flex;
      flex-wrap:wrap;
      flex-direction:column;
      & .infoContainer {
         width:100%;
         height:50%;
      }
      
      & .buttonContainer {
         width:100%;
         height:50%;
         display:flex;
         padding-top:20px;
         a {
            border:0;
            height:60px;
            width:300px;
            background-color:#ff4338;
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
                  <CloseIcon onClick={()=>handleCloseModal()}><img src={closeIcon}/></CloseIcon>
                  <LeftArrow onClick={()=>updateDisplayProject(displayProject - 1)} ><Fade delay={1000} duration={400} right><img src={arrowLeft}/></Fade></LeftArrow>
                  <RightArrow onClick={()=>updateDisplayProject(displayProject + 1)}><Fade delay={1000} duration={400} left><img src={arrowRight}/></Fade></RightArrow>
                  
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