import React from 'react';
import styled from "styled-components";
import {useHistory} from 'react-router-dom';
import {ContactForm, MobileBurger, LinksContainer, MobileMenu} from '../components/index';
import ReactTooltip from 'react-tooltip';
import { WrapperSrc} from '../styled/styles';


const Wrapper = styled(WrapperSrc)`    
   z-index:9999;
   & .contentContainer {
      padding:20px 40px 20px 0;

      @media (max-width: 900px)  {
         padding:0;
      } 

      & .headerContainer {
         border-radius:0 10px 0px 0!important;

            
         @media (max-width: 900px)  {
            border-radius:0!important;
         } 
      }
   }


   & .linkContainer {
      & .link {
         writing-mode: vertical-lr;
      }
   }


   &:LinksContainer {
      background-color:blue!important;
   }

`


const Contact = ({setEnterDirection, globalSlideAnimationDuration, setMainInitial, width, setOpenMobileMenu, openMobileMenu }) => {
   const history = useHistory();

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