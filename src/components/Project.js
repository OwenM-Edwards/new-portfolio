import React, {useState} from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"

import websiteB_BG from  "../img/website-b.jpg";
import websiteB_BG_2 from  "../img/website-b-2.png";
import websiteB_BG_3 from  "../img/website-b-3.png";
import websiteC_BG from  "../img/website-c.jpg";
import websiteC_BG_2 from  "../img/website-c-2.png";
import websiteC_BG_3 from  "../img/website-c-3.png";
import websiteD_BG from  "../img/website-d.jpg";
import websiteD_BG_2 from  "../img/website-d-2.png";
import websiteD_BG_3 from  "../img/website-d-3.png";
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import projectInfo from '../portfolio projects/projects';

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
   padding:0 2px 5px 5px;
   flex-grow:1;

   @media (max-width: 700px) {
      width:100%;
      padding:0px;
      margin-left:0%;
      min-height:92%;
   }

   & .project {
      width:100%;
      height:100%;
      color:white;
      display:flex;
      flex-direction:column;
      padding:0px 30px 0px 30px;
      
      @media (max-width: 700px) {
         padding:20px 0px 5px 0px;
      }
      
      & h2 {
         text-align:center;
         font-size:2rem;
         height:auto;
         -webkit-user-select: none; /* Safari */        
         -moz-user-select: none; /* Firefox */
         -ms-user-select: none; /* IE10+/Edge */
         user-select: none; /* Standard */
         @media (max-width: 700px) {
            display:none;
         }
      }

      & .imageWrapper {
         height:50%;
         width:100%;
         box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);   
         padding:35px;
         border-radius:10px;
         
         @media (max-width: 700px) {
            height:auto;
            margin-bottom:-0px;
            padding:20px 25px 0 25px;
            width:100%;
         }
      }
      & .test {
         display:none;
      }
      & .imageContainer {
         height:100%;
         width:100%;

         & div {
            height:100%;
            width:auto;

            & img {
               height:100%;
               width:100%;
               object-fit:contain;
               border-radius:10px;
               margin:0 auto;   
            }
         }
      }
      
      & section {
         width:100%;
         height:42%;
         display:flex;
         flex-direction:column;
         border-radius:10px;
         padding:20px 0 20px 0;

         @media (max-width: 700px) {
            flex-grow:1;
            margin-bottom:-0px;
            justify-content:space-between;
            padding:0px 0 10px 0;
         }

         & .infoContainer {
            display:flex;
            flex-direction:row;
            min-height:95%;
            width:100%;
            justify-content:center;
            padding-right:20px;
            @media (max-width: 700px) {
               min-height:30%;
               flex-direction:column;
            }
            & p {
               font-size:1.1rem;
               height:100%;
               width:80%;
               max-width:590px;
               padding:5px;
               overflow-y:scroll;
               border-left:1px solid #950d0f;
               border-right:1px solid #950d0f;
               
               @media (max-width: 700px) {
                  font-size:1.1rem;
                  padding:15px 15px 25px 15px;
                  border:10px;
                  margin:0 auto;
                  width:100%;
                  height:70%;
               }
               & br {
                  margin-bottom:10px;
               }
            }
            & ul {
               width:auto;
               position: relative;
               top:15px;
               left:20px;

               @media (max-width: 700px) {
                  display:flex;
                  flex-direction:row;
                  flex-wrap:wrap;
                  left:25px;
                  height:auto;
                  width:100%;
               }

               & li {
                  margin-right:5px;
                  padding:0 8px 2px 7px;
                  border-right:1px solid #950d0f;
                  @media (max-width: 700px) {
                     font-size:0.8rem;
                     margin-right:10px;
                  }
               }
            }
         }

         & .buttonContainer {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
            min-height:10%;
            margin:10px auto 0 auto;
            gap:30px;
            padding:5px;
            @media (max-width: 700px) {
               height:20%;
               padding:0px;
               width:90%;
               margin:0 auto 0 auto;
               align-items:flex-end;
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
               max-width:300px;
               min-height:30px;

               &:hover {
                  background-color:#fc5a51;
               }
               @media (max-width: 700px) {
                  font-size:0.9rem;
                  padding:10px;
                  max-height:30px;
               }
            }
         }
      }
   }
`





const Project = ({displayProject}) => {
   const [projectHtml, setProjectHtml] = useState(false);
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   console.log('TEEEEEEEEEEEEEST');



   const buildProjects = () => {

      projectInfo.forEach(project => {
         console.log(project)
         setProjectHtml(
            <div className="project">
               <Fade delay={300}> 
                  <h2>{project.title}</h2>
   
                  <div className="imageWrapper">
                     <div className="imageContainer">
                        <Slider {...settings}>
                           {
                              project.images.forEach(image => {
                                 <div className="slide">
                                    <LazyLoad>
                                       <img alt="Student Psychiatry" src={image}/>
                                    </LazyLoad>
                                 </div>
                              })
                           }
                        </Slider>
                     </div>
                  </div>
   
   
                  <section>
                     <div className="infoContainer">
                        <p>
                           {project.info}
                        </p>
   
                        <ul>
                           <li>React.js</li>
                           <li>Redux</li>
                           <li>Node.js</li>
                           <li>Express</li>
                           <li>PostgreSQL</li>
                        </ul>
                     </div>
   
                     <div className="buttonContainer">
                        <a className="button" target="blank" href={project.githubLink}>Github</a>
                        <a className="button" target="blank" href={project.demoLink}>View site</a>
                     </div>
                  </section>
               </Fade>
            </div>
         )
      });
   }
   if(!projectHtml){
      buildProjects();
   }
   
   


   const projects = [
      <div className="project">
         <Fade delay={300}> 

            <section>
               <div className="infoContainer">
                  <p>
                     Student psychiatry was initially designed to help students securely organise online events during Covid lockdown. 
                     <br/>
                     
                     Event organisers must register using an approved email domain to add their own events. Each event has public links, for anyone to view, and private links which can only be viewed by registered users. This helps organiser protect their open event links.
                     <br/>
 
                     The Node.JS server handles user sessions with express session, this was the first time I used this technology and it taught me a lot. Mention sequelize too.
                  </p>

                  <ul>
                     <li>React.js</li>
                     <li>Redux</li>
                     <li>Node.js</li>
                     <li>Express</li>
                     <li>PostgreSQL</li>
                  </ul>
               </div>

               <div className="buttonContainer">
                  <a className="button" target="blank" href="https://github.com/OwenM-Edwards/student-psych-frontend">Github</a>
                  <a className="button" target="blank" href="https://www.studentpsychiatry.co.uk/calendar/5/2021">View site</a>
               </div>
            </section>
         </Fade>
      </div>,
   
      <div className="project">
         <Fade delay={300}>
            <h2>Community NPC Generator</h2>

            <div className="imageWrapper">
               <div className="imageContainer">
                  <Slider {...settings}>
                     <div className="slide">
                        <LazyLoad className="lazyLoad">
                           <img alt="RPG Generator"src={websiteB_BG}/>
                        </LazyLoad>
                     </div>
                     <div className="slide">
                        <LazyLoad>
                           <img alt="RPG Generator" src={websiteB_BG_2}/>
                        </LazyLoad>
                     </div>
                     <div className="slide">
                        <LazyLoad>
                           <img alt="RPG Generator" src={websiteB_BG_3}/>
                        </LazyLoad>
                     </div>
                  </Slider>
               </div>
            </div>

            <section>
               <div className="infoContainer">
                  <p>
                     The Community NPC Gen is a random character creator for us in tabletop games.
                     <br/ >                                                                           
                     An easy and quick to use NPC generator for tabletop games, this was one of my older projects that I re-wrote to take advantage and learn React hooks. The App also allows users to submit their own character data to the generator for others to use.
                     <br/>
 
                     This was one of the first full-stack web apps I ever made, and years later I decided to return to it and rewrite it to take advantage of Redux and React hooks. Doing this turned out to be incredibly beneficial as it strengthened my understanding of both these technologies.

                  </p>

                  <ul>
                     <li>React.js</li>
                     <li>Redux</li>
                     <li>Node.js</li>
                     <li>Express Session</li>
                     <li>PostgreSQL</li>
                     <li>Cloudinary API</li>
                  </ul>
               </div>

               <div className="buttonContainer">
                  <a className="button" target="blank" href="https://github.com/OwenM-Edwards/The-Community-NPC-Generator-Front-End">Github</a>
                  <a className="button" target="blank" href="https://the-community-npc-generator-front-end.vercel.app/">View site</a>
               </div>
            </section>
         </Fade>
      </div>,
   
      <div className="project">
         <Fade delay={300}>
            <h2>Oakfield Photography</h2>

            <div className="imageWrapper">
               <div className="imageContainer">
                  <Slider {...settings}>
                     <div className="slide">
                        <LazyLoad className="lazyLoad">
                           <img alt="Oakfield Photography" src={websiteC_BG}/>
                        </LazyLoad>
                     </div>
                     <div className="slide">
                        <LazyLoad className="lazyLoad">
                           <img alt="Oakfield Photography" src={websiteC_BG_2}/>
                        </LazyLoad>
                     </div>
                     <div className="slide">
                        <LazyLoad className="lazyLoad">
                           <img alt="Oakfield Photography" src={websiteC_BG_3}/>
                        </LazyLoad>
                     </div>
                  </Slider>
               </div>
            </div>

            <section>
               <div className="infoContainer">
                  <p>
                     Full disclosure; this is my fathers company!
                     <br/>

                     They were in serious need of a website redesign, and I was happy to oblige. This was the first live project I made that made use of SCSS. The site features a mobile-first responsive design, a service map powered by Google Maps, and automatically pulls and sorts gallery images using the Cloudinary API.
                  </p>

                  <ul>
                     <li>JavaScript</li>
                     <li>SCSS</li>
                     <li>Cloudinary API</li>
                     <li>Google Maps API</li>
                  </ul>
               </div>
               <div className="buttonContainer">
                  <a className="button" target="blank" href="https://github.com/OwenM-Edwards/Oakfield-Photography">Github</a>
                  <a className="button" target="blank" href="https://www.oakfield-photography.com/">View site</a>
               </div>
            </section>
         </Fade>
      </div>,
   
      <div className="project">
         <Fade delay={300}>
            <h2>Myth-Des</h2>

            <div className="imageWrapper">
               <div className="imageContainer">
                  <Slider {...settings}>
                     <div className="slide">
                        <LazyLoad className="lazyLoad">
                           <img alt="Myth-des" src={websiteD_BG}/>
                        </LazyLoad>
                     </div>
                     <div className="slide">
                        <LazyLoad className="lazyLoad">
                           <img alt="Myth-des" src={websiteD_BG_2}/>
                        </LazyLoad>
                     </div>
                     <div className="slide">
                        <LazyLoad className="lazyLoad">
                           <img alt="Myth-des" src={websiteD_BG_3}/>
                        </LazyLoad>
                     </div>
                  </Slider>
               </div>
            </div>

            <section>
               <div className="infoContainer">
                  <p>
                     Myth-Des is a fictional design company I created to help hone my CSS and SCSS skills. I also used it to experiment with CSS animations, creating a sleek landing page and header animations.
                     <br/>
 
                     It showcases art projects from around Nottingham and some of the fictional brands that they work with.
                  </p>

                  <ul>
                     <li>JavaScript</li>
                     <li>CSS / SCSS</li>
                     <li>HTML</li>
                  </ul>
               </div>
               <div className="buttonContainer">
                  <a className="button" target="blank" href="https://github.com/OwenM-Edwards/fic_design_comp">Github</a>
                  <a className="button" target="blank" href="https://owenm-edwards.github.io/fic_design_comp/">View site</a>
               </div> 
            </section>
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