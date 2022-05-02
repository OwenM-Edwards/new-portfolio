import React  from 'react';
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion"
import {useHistory} from 'react-router-dom';
import {ContactForm} from '../components/index';
import {LinksContainer} from '../components/index';
import Fade from 'react-reveal/Fade';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import { WrapperSrc, BgNoiseSrc } from '../styled/styles';


const Wrapper = styled(WrapperSrc)`    
overflow:hidden;
   & .contentContainer {
      padding:20px;

      @media (max-width: 700px), (max-height:700px)  {
         padding:8px 8px 5px 8px;
      }  
   }


   & .linkContainer {
      & .link {
         writing-mode: vertical-lr;
      }
   }

`


const Contact = ({setEnterDirection, globalSlideAnimationDuration}) => {
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
            x: { type: "easeInOut", stiffness: 300, damping: 30, duration:globalSlideAnimationDuration, }
         }}
      >
         <BgNoiseSrc></BgNoiseSrc>
         <ReactTooltip />
         <div className="linkContainer">
            <div className="projectLink link link-a-contact" onClick={()=>handleMainClick()}>Home</div>
            <div className="projectLink link link-b-contact" onClick={()=>handleProjectsLink()}>Projects</div>
         </div>

         <div className="contentContainer">
            <div className="headerContainer">
               <LinksContainer/>
               <h1>Contact me</h1>
            </div>
            <ContactForm/>
         </div>
      </Wrapper>
   )
}


export default Contact;