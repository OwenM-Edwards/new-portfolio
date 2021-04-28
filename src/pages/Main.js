import React  from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../img/profile.jpg";
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


  & .contentContainer {
    height:100%;
    width:90%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:50px;
    & .techContainer {
      width:100%;
      height:300px;
      background-color:red;
    }
  }
  & .linkContainer {
    display:flex;
    width:10%;
    height:100%;
    & .link {
      width:50%;
      height:100%;
      background-color:black;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      color:white;
      text-align:center;
      letter-spacing:30px;
      text-decoration:none;
      border:2px solid white;
      cursor: pointer;
      padding-right:5px;
      -webkit-touch-callout: none; 
      -webkit-user-select: none; 
      -khtml-user-select: none; 
      -moz-user-select: none;
      -ms-user-select: none; 
      user-select: none;
    }
  }

  & img {
    width:100px;
    border-radius:100%;
  }
`

const Main = ({setEnterDirection}) => {
  const history = useHistory();

  const handleProjectsLink = () => {
    setEnterDirection(true);
    console.log('test')
    history.push('/projects')
  }

  return(
    
    <Wrapper
      initial={{x: `-100vw`}}
      animate={{x: 0}}
      exit={{x: `-100vw` }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 1 }
      }}
    >

      <div className="contentContainer">
        <img src={profileImg}></img>
        <h1>Owen Edwards</h1>
        <p>Web Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae arcu pulvinar, laoreet felis tempor, placerat massa. Suspendisse potenti. Aenean faucibus elit eu dui maximus, in euismod velit sagittis. Aliquam rutrum viverra eleifend. Nam pharetra ornare enim, sed condimentum purus. Fusce mattis dignissim luctus. Aenean a nunc sit amet orci fringilla sagittis. Integer scelerisque placerat commodo. Suspendisse arcu erat, ullamcorper ut cursus sit amet, dictum ac urna. Ut iaculis laoreet ex, a volutpat ligula fermentum et. Duis enim elit, hendrerit in placerat ut, molestie a sapien. Nulla eu consequat arcu. Suspendisse vitae sem ac tortor accumsan aliquet.    </p>
        <div className="techContainer"></div>
      </div>
      

      

      <div className="linkContainer">
        <div className="link" onClick={()=>handleProjectsLink()}>Projects</div>
        <Link className="link" to="/contact">Contact</Link>
      </div>
      
    </Wrapper>

  )



}


export default Main;

