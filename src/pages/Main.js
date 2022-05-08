import React from 'react';
import styled from "styled-components";
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
import arrow from '../img/arrow.png';
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



const Wrapper = styled(WrapperSrc)`
  z-index:9999;
  
  & .contentContainer {
    @media (max-width: 700px) {
      padding-bottom:50px;
    }

    & h1 {
      color:${props => props.theme.primaryFontCol};
      font-size:3.0rem;
      padding:30px;
      width:auto;
      border-radius:0px 20px 20px 0;
      margin:0 auto;
      text-align:center;
      z-index:2;
      position: relative;
      top:2%;
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
  position:relative;
  top:-1%;
  & img {
    width:100%;
    height:100%;
  }
`

const Main = ({setEnterDirection, globalSlideAnimationDuration}) => {
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
        x: { type: "easeInOut", duration:globalSlideAnimationDuration },
        opacity: { duration: 1 }
      }}
    >
      {/* <BgNoiseSrc></BgNoiseSrc> */}
      <ReactTooltip />
      <LinksContainer/>
      
      <div className="contentContainer">
        <Fade top><h1>Hello, my name is <span data-tip="Thats me!">Owen</span>. I'm a web developer.</h1></Fade> 

        <HeadShake delay={2000} >
          <div className="arrowContainer">
            <h2 className="arrowText">Get in touch, or check out my projects here</h2>
            <img alt="arrow" className="arrow" src={arrow}/>
          </div>
        </HeadShake> 

        <ProfileImgContainer>
          <img className="testing" alt="test" src={profilePicDark}/>
        </ProfileImgContainer>
    
        
        {/* <Fade bottom>
          <h2>Some of the technologies I use...</h2>
          <div className="techContainer">
            <LazyLoad className="lazyload"><img alt="HTML5" data-tip="HTML5" src={htmlIcon}/></LazyLoad>
            <LazyLoad className="lazyload"><img alt="CSS3" data-tip="CSS3" src={cssIcon}/></LazyLoad>
            <LazyLoad className="lazyload"><img alt="WIX" data-tip="WIX" src={wixIcon}/></LazyLoad>
            <LazyLoad className="lazyload"><img alt="JavaScript" data-tip="JavaScript" src={jsIcon}/></LazyLoad>
            <LazyLoad className="lazyload"><img alt="React.js" data-tip="React.js" src={reactIcon}/></LazyLoad>
            <LazyLoad className="lazyload"><img alt="Node.js" data-tip="Node.js" src={nodeIcon}/></LazyLoad>
            <LazyLoad className="lazyload"><img alt="SASS" data-tip="SASS" src={sassIcon}/></LazyLoad>
            <LazyLoad className="lazyload"><img alt="PostgreSQL" data-tip="PostgreSQL" src={postgresIcon}/></LazyLoad>
          </div>
        </Fade> */}
      </div>
      
      <div className="linkContainer">
        <div className="projectLink link link-b-main" onClick={()=>handleProjectsLink()}>Projects</div>
        <div className="projectLink link link-a-main" onClick={()=>handleContactsLink()}>Contact</div>
      </div>
      
    </Wrapper>
  )
}


export default Main;