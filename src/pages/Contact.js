import React from 'react';
import styled from "styled-components";
import {useHistory} from 'react-router-dom';
import {ContactForm, MobileBurger, LinksContainer, MobileMenu} from '../components/index';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import { WrapperSrc} from '../styled/styles';


const Wrapper = styled(WrapperSrc)`    
   z-index:9999;
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


const Contact = ({setEnterDirection, globalSlideAnimationDuration, setMainInitial, width, setOpenMobileMenu, openMobileMenu }) => {
   const history = useHistory();


   const handlers = useSwipeable({
      
      onSwipedDown: () => {
         if(width <= 900){
            setEnterDirection(false);
            history.push('/projects')
         }
      },
      preventDefaultTouchmoveEvent: true,
   });

   const handleProjectsLink = () => {
      setEnterDirection(false);
      history.push('/projects')
   }

   const handleMainLink = () => {
      setMainInitial(true);
      history.push('/home');
   }

   return(
      <Wrapper
         {...handlers}
         initial={
            width <= 900 ? {y: `100vh`} : {x: `100vw`}
         }
         animate={ width <= 900 ? {y: 0} : {x: 0}}
         exit={
            width <= 900 ? {y: `+100vh` } : {x: `100vw`}
         }
         transition={{
            x: { type: "easeInOut", duration:globalSlideAnimationDuration, }
         }}
      >
         <ReactTooltip />
         <div className="linkContainer">
            <div className="projectLink link link-a-contact" onClick={()=>handleMainLink()}>Home</div>
            <div className="projectLink link link-b-contact" onClick={()=>handleProjectsLink()}>Projects</div>
         </div>

         <div className="contentContainer">
            <div className="headerContainer">
               <LinksContainer/>
               <h1>Contact me</h1>
               <MobileBurger setOpenMobileMenu={setOpenMobileMenu} openMobileMenu={openMobileMenu}/>
            </div>
            <ContactForm/>
         </div>
         <MobileMenu setOpenMobileMenu={setOpenMobileMenu} handleProjectsLink={handleProjectsLink} handleMainLink={handleMainLink} openMobileMenu={openMobileMenu} />
      </Wrapper>
   )
}


export default Contact;