import React, {useEffect, useState} from 'react';
import styled, { keyframes } from "styled-components";
import {useHistory} from 'react-router-dom';
import htmlIcon from '../img/html5.svg';
import cssIcon from '../img/css.svg';
import jsIcon from '../img/js.svg';
import rotateRing from '../img/rotateRing.png';
import outerRingLeft from '../img/outerRingLeft2.png';
import outerRingRight from '../img/outerRingRight2.png';
import outerRingBottom from '../img/outerRingBottom2.png';
import nodeIcon from '../img/node.svg';
import bootstrapIcon from '../img/bootstrap.png';
import wordpressIcon from '../img/wordpress.png';
import phpIcon from '../img/php.png';
import reactIcon from '../img/react.svg';
import sassIcon from '../img/sass.svg';
import postgresIcon from '../img/postgres.svg';
import arrowRed from '../img/arrowRed.png';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import profilePicDark from '../img/profileDark.png'
import { WrapperSrc } from '../styled/styles';
import githubIcon from  "../img/github.png";
import resumeIcon from  "../img/resume.png";
import CV from "../img/Owen_Edwards_CV.pdf";


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
    height:100%;
    width:100%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


    & .largeRing {
      position:absolute;
      border-radius: 50%;
      background: green;
      margin-left:auto;
      margin-right:auto;
      transform: translate(-0%,-0%);
      height:120%;
      width:${props => props.ringWidth};
      // border:90px solid ${props => props.theme.offBlack};
      // animation-name: ${expand};
      // animation-duration: 1s;
      // animation-iteration-count: 1;
      // transition:scale 0.2s easeInOut;
      background: radial-gradient(ellipse at     center, 
        rgba(255,113,12,0) 40%,
        #1d1d1d 40.1%);
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
      top:45%;
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
  }

  & .linkContainer {
    & .link-b {
      writing-mode: vertical-rl;
    }
  }
`

const ProfileImgContainer = styled.div`
  width:60%;
  height:40%;
  max-width:800px;
  position:relative;
  display:flex;
  justify-content:center;
  @media (min-width: 3000px) {
    width:650px;
    height:650px;
  }
  @media (min-width: 5000px) {
    width:950px;
    height:950px;
  }
  
  & .profilePic {
    width:60%;
    height:100%;
    background-position:center;
    background-repeat:no-repeat;
    background-size: contain;
    display:flex;
    justify-content:center;
    align-content:center;
    border-radius:100%;
    position:relative;
    & .rotateRing {
      width:100%;
      height:100%;
      background-position:center;
      background-repeat:no-repeat;
      background-size: contain;
      border-radius:50%;
      scale:1.1;
    }
  }

  & .leftRingContainer {
    position:absolute;  
    width:20%;
    height:100%;
    left: 0; 
    display:flex;
    justify-content:center;
    align-items:center;
    & .outerRingLeft {
      width:100%;
    
    }
  }
  & .rightRingContainer {
    position:absolute;  
    width:20%;
    height:100%;
    right: 0; 
    display:flex;
    justify-content:center;
    align-items:center;
    & .outerRingRight {
      width:100%;
    }
  }
  & .bottomRingContainer {
    position:absolute;  
    width:50%;
    height:10%;
    bottom:-100px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:yellow;
    & .outerRingBottom {
      width:100%;
    }
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
      left:38%;
      bottom:-1px;
      display:none;
      align-items:center;
      div {
        top:-40px;
        left:50px;
      }
      img {
        width:35px;
        height:35px;
        margin-right:10px;
      }
      & .github {
        width:32px;
        height:32px;
      }
    }
    .show {
      display:flex!important; 
    }
  }
`


const MainTest = ({setEnterDirection, globalSlideAnimationDuration, mainInitial, width, height}) => {
  const [ ringWidth, setRingWidth ] = useState('100%');
  const history = useHistory();
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      history.push('/projects')
    },
    preventDefaultTouchmoveEvent: true,
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
  
  const calcRingWidth = () => {
    let largeRing = document.querySelector('.largeRing')
    setRingWidth(`${largeRing.offsetHeight}px`)
  }
  useEffect(() => {   
    calcRingWidth(); 
    window.addEventListener("mousemove", addRotation);
    window.addEventListener('resize', calcRingWidth);

    return () => {
      window.removeEventListener("mousemove", addRotation);
      window.removeEventListener("mousemove", calcRingWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(ringWidth)

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
      ringWidth={ringWidth} 
    >
      <ReactTooltip />
      
      <div className="contentContainer">

            <div className="largeRing">
            </div>

         
        {/* <Fade top><h1>Hello, my name is <span data-tip="Thats me!">Owen</span>. I'm a web developer.</h1></Fade>  */}

        {/* <HeadShake delay={2000} >
          <div className="arrowContainer">
            <h2 className="arrowText">Get in touch, or check out my projects here</h2>
            <img alt="arrow" className="arrow" src={arrowRed}/>
          </div>
        </HeadShake>  */}

        <ProfileImgContainer>
         
          
          <Fade right>
            <div className="leftRingContainer">
              <img className="outerRingLeft" src={outerRingLeft}/>
            </div>
          </Fade>
          
          <Fade left>
            <div className="rightRingContainer">
              <img className="outerRingRight" src={outerRingRight}/>
            </div>
          </Fade>

          {/* <Fade top>
            <div className="bottomRingContainer">
              <img className="outerRingBottom" src={outerRingBottom}/>
            </div>
          </Fade> */}
          
          
          <div className="profilePic" style={{backgroundImage: `url(${profilePicDark})`}}>
            <div style={{backgroundImage: `url(${rotateRing})`}} className="rotateRing"></div>
            
          </div>

          

          {/* <div className="skillContainer">
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
              <a target="blank" href={CV}><img alt="Resume link" data-tip="Take a look at my CV"  src={resumeIcon }/></a>
              <a target="blank" href="https://github.com/OwenM-Edwards"><img className="github" alt="Github link" data-tip="My github profile." src={githubIcon }/></a>
              </Fade>
            </div>
          </div> */}

        </ProfileImgContainer>
      </div>
      
      <div className="linkContainer">
        <div className="projectLink link link-b-main" onClick={()=>handleProjectsLink()}>Projects</div>
        <div className="projectLink link link-a-main" onClick={()=>handleContactsLink()}>Contact</div>
      </div>
    </Wrapper>
  )
}


export default MainTest;