import React from 'react';
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import noiseBG from '../img/noise.png';

const theme = {
   offBlack : "#1d1d1d",
   primaryColor: "#F9A825",
   primaryColorBorder: "#F9A825",
   secondaryColor: "#1d1d1d",
   secondaryColorBorder: "#F9A825",
   secondaryColorHover: "#2e2d2d",
   primaryFontCol: "#1d1d1d",
}

const grain = keyframes`
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) }
`
const BgNoiseSrc = styled.div`
   content: "";
   background-image:url(${noiseBG});
   height: 200%;
   width: 200%;
   position: fixed;
   top: -100%;
   left: -50%;
   animation: 10s ${grain} steps(10) infinite;
   z-index:1;
`


const WrapperSrc = styled(motion.div)`
  width:100%;
  margin:0 auto;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  position: absolute;

   & .contentContainer {
      height:100%;
      width:100%;
      flex-grow:1;
      display:flex;
      flex-direction:column;
      
      padding-bottom:50px;
      justify-content:center;
      align-items:center;

      /* &:after {
         content: "";
         background-image:url(${noiseBG});
         height: 300%;
         width: 300%;
         position: fixed;
         top: -100%;
         left: -50%;
         animation: 20s ${grain} steps(10) infinite;
         z-index:1;

      } */


      & .headerContainer {
         width:100%;
         background-color:#1d1d1d;
         border-radius:20px 20px 0px 0;
         z-index:3;
         border-bottom:2px solid #950d0f;

         @media (max-width: 700px), (max-height:700px) {
            font-size:2rem;
            padding:30 10px;
         }

         & h1 {
            color:white;
            font-size:3.0rem;
            padding:40px;
            margin:0 auto;
            text-align:center;  
            -webkit-user-select: none; /* Safari */        
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
            @media (max-width: 700px), (max-height:700px) {
               font-size:1.3rem;
               padding:10px;
            }
            @media (max-height: 850px) {
               font-size:2.3rem;
            }
         }
      }
   }
   & .projectLink {
      cursor: pointer;
      text-orientation: mixed;
      color:white;
      text-align:center;
      letter-spacing:25px;
      text-decoration:none;
      width:5%;
      max-width:60px;
      height:100%;
      background-color:${props => props.theme.secondaryColor};
      -webkit-touch-callout: none; 
      -webkit-user-select: none; 
      -khtml-user-select: none; 
      -moz-user-select: none;
      -ms-user-select: none; 
      user-select: none;
      z-index:3;
      opacity:1;
      font-size:1.2rem;
      padding:5px;
      padding-right:10px;
      transition:background-color 0.2s ease-in-out;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      display:flex;
      justify-content:center;
      align-items:center;
      padding:0px 5px 0 0px;
      @media (max-width: 700px) {
         width:10%;
         font-size:0.8rem;
         max-width:80px;
      }
      &:hover {
         background-color:${props => props.theme.secondaryColorHover};
      }
   }
   & .projectLink-a {
      margin-right:auto;
      writing-mode: vertical-rl;
      transform:rotate(-180deg); 
      text-align:center;
      padding:0px 0px 0 5px;
   }
   & .projectLink-b {
      writing-mode: vertical-rl;
      padding:0px 0px 0 5px;
   }

   & .linkContainer {
      display:flex;
      width:10%;
      height:100%;
      justify-content:flex-end;
      max-width:120px;
      z-index:3;
      background-color:${props => props.theme.primaryColor};
      @media (max-width: 700px) {
         min-width:15%;
      }
      & .link {
         width:50%;
         height:100%;
         background-color:${props => props.theme.secondaryColor};
         writing-mode: vertical-lr;
         
         padding:0px 0px 0 5px;
         &:hover {
            background-color:${props => props.theme.secondaryColorHover};
         }
         @media (max-width: 700px) {
            font-size:0.8rem;
         }
      }
      & .link-a-main {
         width:50%;
         border-left:3px solid ${props => props.theme.secondaryColorBorder};
      }
      & .link-b-main {
         
      }
      & .link-a-contact {
         width:50%;
         border-left:3px solid ${props => props.theme.secondaryColorBorder};
         transform:rotate(-180deg); 
      }
      & .link-b-contact {
         transform:rotate(-180deg); 
         
      }
   }
`

export { theme, WrapperSrc, BgNoiseSrc };