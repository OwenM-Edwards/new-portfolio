import React  from 'react';
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import {useHistory} from 'react-router-dom';
import {ContactForm} from '../components/index';
import noiseBG from '../img/noise.png';
import resumeIcon from '../img/resume.png';

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
   justify-content:center;
   position: absolute;

   & .contentContainer {
      height:100%;
      width:100%;
      flex-grow:1;
      display:flex;
      flex-direction:column;
      background-color:#950d0f;
      padding:20px;
      justify-content:center;
      align-items:center;
      & h1 {
         color:white;
         font-size:3.9rem;
         padding:40px;
         width:auto;
         border-radius:0px 20px 20px 0;
         margin:0 auto;
         text-align:center;
         z-index:2;
         width:98%;
         background-color:#1d1d1d;
         border-radius:10px 10px 0 0;
         border-bottom:2px solid #950d0f;
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
      & .link {
         width:50%;
         height:100%;
         background-color:#ff4338;
         writing-mode: sideways-lr;
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
      }
      & .link-a {
         border-right:3px solid #950d0f;
      }
   }

`


const Contact = ({setEnterDirection}) => {
   const history = useHistory();

   const handleProjectsLink = () => {
      setEnterDirection(false);
      history.push('/projects')
   }

   const handleMainClick = () => {
      history.push('/main')
   }

   return(
      <Wrapper
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
            <h1>Contact me</h1>
            <ContactForm/>
         </div>
        

      </Wrapper>
   )
}


export default Contact;