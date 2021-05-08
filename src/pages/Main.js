import React  from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../img/profile.jpg";
import linkedIn from "../img/linkedin.png";
import {useHistory} from 'react-router-dom';

const Wrapper = styled(motion.div)`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  border:5px solid black;
  position: absolute;


  & .contentContainer {
    height:100%;
    flex-grow:1;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:20px;

    & .container-a {
      width:300px;
      height:70%;
      background-color:#ff4338;
      overflow:visible;
      position: relative;
      z-index:3;
      & h1 {
        font-size:4rem;
        letter-spacing:1rem;
        color:white;

        position:absolute;
        width:700px;
        padding:20px;
        border-radius:0px 5px 5px 0px;
        top:10%;
        left:10%;
      }
    }
    & .container-b {
      flex-grow:1;
      height:70%;
      background-color:#0e1c2c;
      position: relative;
      z-index:2;
      & .img {
        position:absolute;
        right:10%;
        bottom:-10%;
        width:300px;
        height:300px;
        border-radius:100%;
        background-color:#0e1c3a;
        border:1px solid white;
      }
      & p {
        margin-left:60px;
        margin-top:200px;
        position:absolute;
        width:500px;
        color:white;
      }
    }
    & .container-c {
      width:100%;
      height:30%;
      background-color:#ffffff;
      display:flex;
      flex-direction:column;
      padding:60px;
      & h2 {
        margin:0 auto;
        width:70%;
      }
      & .techContainer {
        display:flex;
        flex-wrap:wrap;
        width:70%;
        height:90%;
        margin:0 auto;

        & p {
          width:25%;
          border:2px solid black;
        }
      }
    }

    
  }




  & .linkContainer {
    display:flex;
    min-width:60px;
    width:4%;
    max-width:100px;
    height:100%;
    /* position:fixed;
    right:0; */
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
        x: { type: "linear", stiffness: 300, damping: 30 },
        opacity: { duration: 1 }
      }}
    >

      <div className="contentContainer">
        <div className="container-a">
          <h1>Owen Edwards</h1>
        </div>

        <div className="container-b">
          <p>Web Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae arcu pulvinar, laoreet felis tempor, placerat massa. Suspendisse potenti. Aenean faucibus elit eu dui maximus, in euismod velit sagittis. Aliquam rutrum viverra eleifend. Nam pharetra ornare enim, sed condimentum purus. Fusce mattis dignissim luctus. Aenean a nunc sit amet orci fringilla sagittis. Integer scelerisque placerat commodo. Suspendisse arcu erat, ullamcorper ut cursus sit amet, dictum ac urna. Ut iaculis laoreet ex, a volutpat ligula fermentum et. Duis enim elit, hendrerit in placerat ut, molestie a sapien. Nulla eu consequat arcu. Suspendisse vitae sem ac tortor accumsan aliquet.    </p>
          <div className="img"></div>
        </div>

        <div className="container-c">
          <h2>Technologies</h2>
          <div className="techContainer">
            <p>html</p>
            <p>css</p>
            <p>wix</p>
            <p>react</p>
            <p>nodejs</p>
            <p>jscript</p>
            <p>postgres</p>
            <p>sass</p>
          </div>
        </div>
      </div>
      

      

      <div className="linkContainer">
        <div className="link" onClick={()=>handleProjectsLink()}>Projects</div>
        <Link className="link" to="/contact">Contact</Link>
      </div>
      
    </Wrapper>

  )



}


export default Main;
