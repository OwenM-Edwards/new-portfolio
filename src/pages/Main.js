import React, {useState, useEffect} from 'react';
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {useHistory} from 'react-router-dom';
import htmlIcon from '../img/html5.svg';
import cssIcon from '../img/css.svg';
import jsIcon from '../img/js.svg';
import outerRingLeft from '../img/outerRingLeft2.png';
import outerRingRight from '../img/outerRingRight2.png';
import outerRingBottom from '../img/outerRingBottom2.png';
import nodeIcon from '../img/node.svg';
import bootstrapIcon from '../img/bootstrap.png';
import bootstrapIconDark from '../img/bootstrapDark.png';
import bootstrapIconRed from '../img/bootstrapRed.png';
import wordpressIcon from '../img/wordpress.png';
import wordpressIconDark from '../img/wordpressDark.png';
import wordpressIconRed from '../img/wordpressRed.png';
import phpIcon from '../img/php.png';
import phpIconDark from '../img/phpDark.png';
import phpIconRed from '../img/phpRed.png';
import reactIcon from '../img/react.svg';
import sassIcon from '../img/sass.svg';
import wixIcon from '../img/wix.svg';
import postgresIcon from '../img/postgres.svg';
import arrow from '../img/arrow.png';
import arrowDark from '../img/arrowDark.png';
import arrowRed from '../img/arrowRed.png';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import {LinksContainer} from '../components/index';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import LazyLoad from 'react-lazyload';
import profilePicDark from '../img/profileDark.png'
import profilePicRed from '../img/profileRed.png'
import profilePic from '../img/profile.png'
import { WrapperSrc } from '../styled/styles';

const expand = keyframes`
  0% {
    scale:0;
  }
  100% {
    scale:5;
  }
`

const Wrapper = styled(WrapperSrc)`
  z-index:9999;
  
  & .contentContainer {
    @media (max-width: 700px) {
      padding-bottom:50px;
    }

    & h1 {
      color:white;
      font-size:3.0rem;
      padding:30px;
      width:auto;
      border-radius:0px 20px 20px 0;
      margin:0 auto;
      text-align:center;
      z-index:999999;
      position: absolute;
      top:20%;
      transition:textDecoration 6s;
      
      .un::after {
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        background: black;
        transition: 300ms;
      }
      @media (max-width: 700px) {
        font-size:2rem;
        padding:10px;
      }
      @media (max-width: 300px) {
        font-size:1.8rem;
      }
    }
    & span {
      color:${props => props.theme.popColor};
      text-shadow: 1px 1px ${props => props.theme.popColor};
    }
    & h2 {
      color:${props => props.theme.primaryFontCol};
      width:100%;
      text-align:center;
      margin-top:auto;
      font-size:2.3rem;
      border-radius:0 20px 0px 0px;
      z-index:2;
      position:relative;
      bottom:6%;
      @media (max-width: 700px) {
        font-size:1.6rem;
      }
    }

    & .arrowContainer {
      display:flex;
      flex-direction:column;
      text-align:center;
      justify-content:flex-end;
      align-items:flex-end;
      margin-left:auto;
      position: relative;
      top:50%;
      right:40px;
      z-index:999999999;
      @media (max-width: 700px) {
        top:0%;
      }
      & .arrowText {
        font-size:1.3rem;
        color:white;
        z-index:999999999;
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
      width:80%;
      display:flex;
      flex-wrap:wrap;
      height:20%;
      z-index:2;
      border-radius:0 0 20px 0px;
      padding:0 20px 20px 20px;
      max-width:1000px;
      position:relative;
      bottom:3%;
      @media (max-width: 700px) {
        width:100%;
        padding:10px;
      }
      & .lazyload {
        width:25%;
        height:50%;
        margin-bottom:40px;
        & img {
          width:100%;
          height:100%;
        }
      }
    }
  }

  & .linkContainer {
    & .link-b {
      writing-mode: vertical-rl;
    }
  }
`

const ProfileImgContainer = styled.div`
  width:350px;
  height:350px;
  z-index:9000;
  top:35%;
  position:absolute;
  & .largeRing {
    position:absolute;
    width:100%;
    height:100%;
    border-radius:50%;
    border:90px solid ${props => props.theme.offBlack};
    scale:5;
    z-index:-2;
    animation-name: ${expand};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transition:scale 0.2s easeInOut;
  }

  & .rotateRing {
    position:absolute;
    width:100%;
    height:100%;
    scale:1.1;
    border-radius:50%;
    border: 20px solid ${props => props.theme.offBlack};
    border-top: 20px solid ${props => props.theme.popColor};
  }
  & .shadowRing {
    position:absolute;
    width:100%;
    height:100%;
    scale:1.1;
    border-radius:50%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  & .outerRingLeft {
    position:absolute;
    width:60px;
    height:150px;
    scale:2;
    top:28%;
    left:-27%;
    z-index:1;
    cursor:pointer
  }
  .outerRingLeft:hover ~ .skillContainer { 
    .CSSContainer {
      display:flex!important;
    }    
  }
  & .outerRingRight {
    position:absolute;
    width:60px;
    height:150px;
    scale:2;
    top:28%;
    left:110%;
    z-index:1;
    cursor:pointer;
  }
  .outerRingRight:hover ~ .skillContainer { 
    .jsContainer {
      display:flex!important;
    }    
  }
    
  & .outerRingBottom {
    position:absolute;
    width:140px;
    height:50px;
    scale:2;
    top:115%;
    left:30%;
    display:none;
  }
  & .profilePic {
    position:absolute;
    width:100%;
    height:100%;
  }
  & .ringArrow {
    position:relative;
    bottom:19px;
    width:30px;
    height:30px;
    left:45%;
    border-top:10px solid ${props => props.theme.offBlack};
    border-right:10px solid ${props => props.theme.offBlack};
    transform: rotate(-45deg);
  }

  & .skillContainer {
    position:absolute;
    width:100%;
    height:100%;
    scale:2.4;

    .jsContainer {
      position:absolute;
      right:0px;
      top:30%;
      display:none;
      flex-direction:column;
      /* display:none; */
      & .innerItems{
        display:flex;
        flex-direction:column;
        position:absolute;
        right:-30px;
        top:30%;
        img {
          width:45px;
          height:45px;
          margin-bottom:10px;
          &:nth-of-type(1){
            position:relative;
            right:30px;
          }
          &:nth-of-type(3){
            position:relative;
            right:30px;
          }
        }
      }
      & .outerItems{
        display:flex;
        flex-direction:column;
        position:absolute;
        right:-80px;
        top:30px;
        img {
          width:45px;
          height:45px;
          margin-bottom:10px;
        }
      }
      & .outerOutItems {
        display:flex;
        flex-direction:column;
        position:absolute;
        right:-130px;
        top:55px;
        img {
          width:45px;
          height:45px;
          margin-bottom:10px;
        }
      }
    }
    
    .CSSContainer {
      position:absolute;
      left:-30px;
      top:30%;
      display:none;
      flex-direction:column;

      img {
        width:45px;
        height:45px;
        margin-bottom:10px;
        &:nth-of-type(1){
          position:relative;
          left:30px;
        }
        &:nth-of-type(2){
            width:35px;
          height:35px;
        }
        &:nth-of-type(3){
          position:relative;
          left:30px;
        }
      }
    }
    
    .OtherContainer {
      position:absolute;
      left:20%;
      bottom:-20px;
      display:none;
      img {
        width:45px;
        height:45px;
        margin-right:10px;
        &:nth-of-type(1){
          position:relative;
          bottom:30px;
        }
        &:nth-of-type(4){
          position:relative;
          bottom:30px;
        }
      }
    }
    .show {
      display:flex; 
    }
  }
`


const Main = ({setEnterDirection, globalSlideAnimationDuration, mainInitial}) => {
  console.log(mainInitial)
  const history = useHistory();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      history.push('/projects')
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  
  const addRotation = (e) => {
    let imgRotateRing = document.querySelector(".rotateRing");
    let imgRotateRingRect = imgRotateRing.getBoundingClientRect();
    let imgRotateRingCenter= {
      x: imgRotateRingRect.left + imgRotateRingRect.width/2, 
      y: imgRotateRingRect.top + imgRotateRingRect.height/2
    };
    let angle = Math.atan2(e.pageX - imgRotateRingCenter.x, - (e.pageY - imgRotateRingCenter.y) )*(180 / Math.PI);      
    imgRotateRing.style.transform = `rotate(${angle}deg)`;  
  }

  const handleProjectsLink = () => {
    setEnterDirection(true);
    window.removeEventListener("mousemove", addRotation);
    history.push('/projects')
  }

  const handleContactsLink = () => {
    window.removeEventListener("mousemove", addRotation);
    history.push('/contact')
  }

  useEffect(() => {    
    window.addEventListener("mousemove", addRotation);

    return () => {
      window.removeEventListener("mousemove", addRotation);
    };
  }, []);


  return(
    <Wrapper
      {...handlers}
      initial={ mainInitial ? {x: `-100vw`} : false}
      animate={{x: 0}}
      exit={{x: `-100vw` }}
      transition={{
        x: { type: "easeInOut", duration:globalSlideAnimationDuration },
        opacity: { duration: 1 }
      }}
    >
      <ReactTooltip />
      <LinksContainer/>
      
      <div className="contentContainer">
        <Fade top><h1>Hello, my name is <span data-tip="Thats me!">Owen</span>. I'm a web developer.</h1></Fade> 

        <HeadShake delay={2000} >
          <div className="arrowContainer">
            <h2 className="arrowText">Get in touch, or check out my projects here</h2>
            <img alt="arrow" className="arrow" src={arrowRed}/>
          </div>
        </HeadShake> 

        <ProfileImgContainer>
          <div className="largeRing"></div>
          <div className="shadowRing"></div>
          <Fade right>
            <img className="outerRingLeft" src={outerRingLeft}/>
          </Fade>
          
          <Fade left>
            <img className="outerRingRight" src={outerRingRight}/>
          </Fade>

          <Fade top>
            <img className="outerRingBottom" src={outerRingBottom}/>
          </Fade>
          
          <div className="rotateRing"><div className="ringArrow"></div></div>
          <img className="profilePic" src={profilePicDark}/>
          <div className="skillContainer">
            <div className="jsContainer">
              <Fade right>
                <div className="innerItems">
                  <img alt="JavaScript" data-tip="JavaScript" src={jsIcon}/>
                  <img alt="React.js" data-tip="React.js" src={reactIcon}/>
                  <img alt="Node.js" data-tip="Node.js" src={nodeIcon}/>
                </div>
              </Fade>
              <Fade right delay={200} >
                <div className="outerItems">
                  <img className="outer" alt="PostgreSQL" data-tip="PostgreSQL" src={postgresIcon}/>
                  <img className="outer" alt="phpIcon" data-tip="PostgreSQL" src={phpIcon}/>
                </div>
              </Fade>
              <Fade right delay={400} >
                <div className="outerOutItems">
                  <img className="outer" alt="phpIcon" data-tip="PostgreSQL" src={wordpressIcon}/>
                </div>
              </Fade>
            </div>

            <div className="CSSContainer">
              <Fade left>
                <img alt="CSS3" data-tip="CSS3" src={cssIcon}/>
                <img alt="BOOTSTRAP" data-tip="Bootstrap" src={bootstrapIcon}/>
                <img alt="SASS" data-tip="SASS" src={sassIcon}/>
              </Fade>
            </div>

            <div className="OtherContainer">
              <Fade bottom>
                <img src={wordpressIcon}/>
                <img alt="WIX" data-tip="WIX" src={wixIcon}/>
              </Fade>
            </div>
          </div>

        </ProfileImgContainer>
      </div>
      
      <div className="linkContainer">
        <div className="projectLink link link-b-main" onClick={()=>handleProjectsLink()}>Projects</div>
        <div className="projectLink link link-a-main" onClick={()=>handleContactsLink()}>Contact</div>
      </div>
    </Wrapper>
  )
}


export default Main;