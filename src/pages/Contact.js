import React  from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import {useHistory} from 'react-router-dom';

const Wrapper = styled(motion.div)`
   width:100%;
   height:100%;
   display:flex;
   flex-direction:row;
   justify-content:center;
   background-color:yellow;
   border:5px solid black;
   position: absolute;
   & .linkContainer {
      width:10%;
      height:100%;
      margin-right:auto;
      display:flex;

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
            x: { type: "spring", stiffness: 300, damping: 30 }
         }}
      >
         <div className="linkContainer">

            <Link className="link" to="/main">Main</Link>
            <div className="link" onClick={()=>handleProjectsLink()}>Projects</div>
         </div>

         <h1>Contacts</h1>

      </Wrapper>
   )
}


export default Contact;