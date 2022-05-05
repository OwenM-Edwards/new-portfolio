import React from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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





const Project = ({displayProject, projectHtml}) => {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };


   return(
      <AnimatePresence initial={false}>
         <Wrapper>
            {projectHtml[displayProject]}
         </Wrapper>    
      </AnimatePresence>
   )
}


export default Project;