import React, {useEffect} from 'react';
import styled, { keyframes } from "styled-components";
import {useHistory} from 'react-router-dom';
import htmlIcon from '../img/html5.svg';
import cssIcon from '../img/css.svg';
import jsIcon from '../img/js.svg';
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
  @media (min-width: 3000px) {
    width:650px;
    height:650px;
  }
  @media (min-width: 5000px) {
    width:950px;
    height:950px;
  }
  
  & .largeRing {
    position:absolute;
    width:100%;
    height:100%;
    border-radius:50%;
    border:90px solid ${props => props.theme.offBlack};
    scale:5;
    z-index:-5;
    animation-name: ${expand};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transition:scale 0.2s easeInOut;
    @media (min-width: 3000px) {
      border:120px solid ${props => props.theme.offBlack};
    }
    @media (min-width: 4200px) {
      scale:6;
    }
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
    @media (min-width: 3000px) {
      width:110px;
      height:290px;
    }
  }

  & .outerRingRight {
    position:absolute;
    width:60px;
    height:150px;
    scale:2;
    top:28%;
    left:110%;
    @media (min-width: 3000px) {
      width:110px;
      height:290px;
    }
  }
    
  & .outerRingBottom {
    position:absolute;
    width:140px;
    height:50px;
    scale:2;
    top:114%;
    left:30%;
    @media (min-width: 3000px) {
      width:270px;
      height:90px;
    }
  }
  & .profilePic {
    position:absolute;
    width:100%;
    height:100%;
  }
  & .ringArrow {
    position:relative;
    bottom:17px;
    width:30px;
    height:30px;
    left:46%;
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


const MainOld = ({setEnterDirection, globalSlideAnimationDuration, mainInitial, width, height}) => {
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

  const addRevealListner = (e) => {
    if(e.pageY >= (height / 2) + (height / 5)){
      document.querySelector('.CSSContainer').classList.remove('show');
      document.querySelector('.jsContainer').classList.remove('show');
      document.querySelector('.OtherContainer').classList.add('show');
    }
    else if(e.pageX <= width / 2 ){
      document.querySelector('.OtherContainer').classList.remove('show');
      document.querySelector('.jsContainer').classList.remove('show');
      document.querySelector('.CSSContainer').classList.add('show');
    }
    else if(e.pageX >= width / 2 ){
      document.querySelector('.OtherContainer').classList.remove('show');
      document.querySelector('.CSSContainer').classList.remove('show');
      document.querySelector('.jsContainer').classList.add('show');
    }
    else {
      document.querySelector('.OtherContainer').classList.remove('show');
      document.querySelector('.CSSContainer').classList.remove('show');
      document.querySelector('.jsContainer').classList.remove('show');
    }
    
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

    window.addEventListener("mousemove", addRevealListner);
    


    return () => {
      window.removeEventListener("mousemove", addRotation);
      window.removeEventListener("mousemove", addRevealListner);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <a target="blank" href={CV}><img alt="Resume link" data-tip="Take a look at my CV"  src={resumeIcon }/></a>
              <a target="blank" href="https://github.com/OwenM-Edwards"><img className="github" alt="Github link" data-tip="My github profile." src={githubIcon }/></a>
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


export default MainOld;