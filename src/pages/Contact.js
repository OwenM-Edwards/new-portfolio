import React  from 'react';
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion"
import {useHistory} from 'react-router-dom';
import {ContactForm} from '../components/index';
import noiseBG from '../img/noise.png';
import {LinksContainer} from '../components/index';
import Fade from 'react-reveal/Fade';
import { useSwipeable } from 'react-swipeable';

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

const Wrapper = styled(motion.div)`
   width:100%;
   margin:0 auto;
   height:100%;
   display:flex;
   flex-direction:row;
   justify-content:flex-start;
   position: absolute;


   & .contentContainer {
      height:100%;
      width:100%;
      flex-grow:1;
      display:flex;
      flex-direction:column;
      background-color:#950d0f;
      justify-content:center;
      align-items:center;
      padding:20px;

      @media (max-width: 700px) {
         padding:8px 8px 5px 8px;
      }

      & .headerContainer {
         width:98%;
         background-color:#1d1d1d;
         border-radius:20px 20px 0px 0;
         z-index:3;
         border-bottom:2px solid #950d0f;

         @media (max-width: 700px) {
            font-size:2rem;
            padding:30 10px;
         }

         & h1 {
            color:white;
            font-size:3.9rem;
            padding:40px;
            margin:0 auto;
            text-align:center;  
            @media (max-width: 700px) {
               font-size:1.3rem;
               padding:10px;
            }
         }
      }
      &:after {
         content: "";
         background-image:url(${noiseBG});
         height: 300%;
         width: 300%;
         position: fixed;
         top: -100%;
         left: -50%;
         animation: 8s ${grain} steps(10) infinite;
         z-index:1;
         opacity:0.5;
      }
   }


   & .linkContainer {
      display:flex;
      width:10%;
      height:100%;
      justify-content:flex-end;
      max-width:120px;
      z-index:3;
      @media (max-width: 700px) {
         min-width:15%;
      }
      & .link {
         width:50%;
         height:100%;
         background-color:#ff4338;
         writing-mode: vertical-lr;
         text-orientation: mixed;
         color:white;
         text-align:center;
         letter-spacing:25px;
         text-decoration:none;
         cursor: pointer;
         -webkit-touch-callout: none; 
         -webkit-user-select: none; 
         -khtml-user-select: none; 
         -moz-user-select: none;
         -ms-user-select: none; 
         user-select: none;
         opacity:1;
         font-size:1.2rem;
         padding:5px;
         padding-right:10px;
         transition:background-color 0.2s ease-in-out;
         box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
         &:hover {
            background-color:#fc5a51;
         }
         @media (max-width: 700px) {
            font-size:0.8rem;
            padding:0px 0px 0 5px;
         }
      }
      & .link-a {
         border-right:3px solid #950d0f;
      }
   }

`


const Contact = ({setEnterDirection}) => {
   const history = useHistory();

   const handlers = useSwipeable({
      onSwipedRight: () => {
        history.push('/projects')
      },
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
   });

   const handleProjectsLink = () => {
      setEnterDirection(false);
      history.push('/projects')
   }

   const handleMainClick = () => {
      history.push('/main')
   }

   return(
      <Wrapper
         {...handlers}
         initial={{x: `100vw`}}
         animate={{x: 0}}
         exit={{x: `+100vw` }}
         transition={{
            x: { type: "linear", stiffness: 300, damping: 30 }
         }}
      >

         <div className="linkContainer">
            <div className="link link-a" onClick={()=>handleMainClick()}>Home</div>
            <div className="link" onClick={()=>handleProjectsLink()}>Projects</div>
         </div>

         <div className="contentContainer">
            <div className="headerContainer">
               <LinksContainer/>
               <Fade top><h1>Contact me</h1></Fade>
            </div>

            <ContactForm/>
         </div>
        

      </Wrapper>
   )
}


export default Contact;