import React  from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import {useHistory} from 'react-router-dom';
import {ContactForm} from '../components/index';

const Wrapper = styled(motion.div)`
   width:100%;
   height:100%;
   display:flex;
   flex-direction:row;
   justify-content:center;
   background-color:yellow;
   border:5px solid black;
   position: absolute;
   & .contentContainer {
      height:100%;
      flex-grow:1;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:50px;
   }
   & .linkContainer {
      height:100%;
      margin-right:auto;
      display:flex;
      min-width:60px;
      width:4%;
      max-width:100px;
      & .link {
         width:50%;
         height:100%;
         background-color:black;
         writing-mode: sideways-lr;
         text-orientation: mixed;
         color:white;
         text-align:center;
         letter-spacing:30px;
         text-decoration:none;
         border:2px solid white;
         padding-left:5px;
         cursor: pointer;
      }
   }

`


const Contact = ({setEnterDirection}) => {
   const history = useHistory();

   const handleProjectsLink = () => {
      setEnterDirection(false);
      history.push('/projects')
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

            <Link className="link" to="/main">Main</Link>
            <div className="link" onClick={()=>handleProjectsLink()}>Projects</div>
         </div>

         <div className="contentContainer">
            <h1>Contacts</h1>
            <ContactForm/>
         </div>
        

      </Wrapper>
   )
}


export default Contact;