import React  from 'react';
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {useHistory} from 'react-router-dom';
import htmlIcon from '../img/html5.svg';
import cssIcon from '../img/css.svg';
import jsIcon from '../img/js.svg';
import nodeIcon from '../img/node.svg';
import reactIcon from '../img/react.svg';
import sassIcon from '../img/sass.svg';
import wixIcon from '../img/wix.svg';
import postgresIcon from '../img/postgres.svg';
import noiseBG from '../img/noise.png';
import arrow from '../img/arrow.png';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import {LinksContainer} from '../components/index';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';

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
    padding-bottom:50px;
    justify-content:center;
    align-items:center;

    @media (max-width: 700px) {
      padding-top:30px;
      padding-bottom:50px;
    }
    @media (max-width: 300px) {
      padding-top:0px;
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

    & h1 {
      color:white;
      font-size:3.9rem;
      padding:30px;
      width:auto;
      border-radius:0px 20px 20px 0;
      margin:0 auto;
      text-align:center;
      z-index:2;
      @media (max-width: 700px) {
        font-size:2rem;
        padding:10px;
      }
      @media (max-width: 300px) {
        font-size:1.8rem;
      }
      
    }
    & span {
      color:#ff4338;
      text-shadow: 1px 1px #ff4338;
    }
    & h2 {
      color:white;
      width:100%;
      text-align:center;
      margin-top:auto;
      padding:10px;
      font-size:2.5rem;
      border-radius:0 20px 0px 0px;
      z-index:2;
      @media (max-width: 700px) {
        font-size:1.6rem;
      }
    }


    & .arrowContainer {
      /* background-color:blue; */
      display:flex;
      flex-direction:column;
      text-align:center;
      justify-content:flex-end;
      align-items:flex-end;
      margin-left:auto;
      position: relative;
      top:0%;
      @media (max-width: 700px) {
        top:0%;
      }
      & .arrowText {
        font-size:1.3rem;
        @media (max-width: 700px) {
          font-size:0.9rem;
          width:50%;
        }
      }
      & .arrow {
        width:120px;
        height:50px;
        position: relative;
        right:20px;
        @media (max-width: 700px) {
          width:60px;
          height:20px;
        }
      }
    }


    & .techContainer {
      width:90%;
      display:flex;
      flex-wrap:wrap;
      height:25%;
      z-index:2;
      border-radius:0 0 20px 0px;
      padding:20px;
      max-width:900px;
      @media (max-width: 700px) {
        width:100%;
        padding:10px;
      }

      & img {
        width:25%;
        height:50%;
        margin-bottom:40px;
      }
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
      width:20%;
    }
    & .link {
      width:50%;
      height:100%;
      background-color:#ff4338;
      writing-mode: vertical-rl;
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
      display:flex;
      justify-content:center;
      align-items:center;
      padding:0px 0px 0 5px;
      &:hover {
        background-color:#fc5a51;
      }
      @media (max-width: 700px) {
        font-size:0.8rem;
      }
    }
    & .link-a {
      border-left:3px solid #950d0f;
    }
  }
`

const Main = ({setEnterDirection}) => {
  const history = useHistory();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      history.push('/projects')
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleProjectsLink = () => {
    setEnterDirection(true);
    history.push('/projects')
  }
  const handleContactsLink = () => {
    history.push('/contact')
  }

  return(
    
    <Wrapper
      {...handlers}
      initial={{x: `-100vw`}}
      animate={{x: 0}}
      exit={{x: `-100vw` }}
      transition={{
        x: { type: "easeInOut", stiffness: 300, damping: 30 },
        opacity: { duration: 1 }
      }}
    >
      <ReactTooltip />
      <LinksContainer/>
      
      <div className="contentContainer">
      <HeadShake delay={1200}>
          <div className="arrowContainer">
            <h2 className="arrowText">Get in touch, or check out my projects here</h2>
            <img alt="arrow" className="arrow" src={arrow}/>
          </div>
        </HeadShake> 

        <Fade top><h1>Hello, my name is <span>Owen Edwards</span>. I'm a web developer.</h1></Fade> 
        
        <Fade bottom>
          <h2>Some of the technologies I use...</h2>
          <div className="techContainer">
            <img alt="HTML5" data-tip="HTML5" src={htmlIcon}/>
            <img alt="CSS3" data-tip="CSS3" src={cssIcon}/>
            <img alt="WIX" data-tip="WIX" src={wixIcon}/>
            <img alt="JavaScript" data-tip="JavaScript" src={jsIcon}/>
            <img alt="React.js" data-tip="React.js" src={reactIcon}/>
            <img alt="Node.js" data-tip="Node.js" src={nodeIcon}/>
            <img alt="SASS" data-tip="SASS" src={sassIcon}/>
            <img alt="PostgreSQL" data-tip="PostgreSQL" src={postgresIcon}/>
          </div>
        </Fade>
      </div>
      
      <div className="linkContainer">
        <div className="link" onClick={()=>handleProjectsLink()}>Projects</div>
        <div className="link link-a" onClick={()=>handleContactsLink()}>Contact</div>
      </div>
      
    </Wrapper>

  )
}


export default Main;