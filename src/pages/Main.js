import React, {useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import {useHistory} from 'react-router-dom';
import {ContactForm, MobileBurger, LinksContainer, MobileMenu} from '../components/index';
import { useSwipeable } from 'react-swipeable';
import ReactTooltip from 'react-tooltip';
import { WrapperSrc} from '../styled/styles';
import {TypescriptIcon, nodeIcon, bootstrapIcon,wordpressIcon,phpIcon, reactIcon,sassIcon, postgresIcon, cssIcon, jsIcon, githubIcon,CVIcon,}  from '../img/index.js';
import Fade from 'react-reveal/Fade';

const Wrapper = styled(WrapperSrc)`    
  z-index:9999;
  & .contentContainer {
    padding:20px 0 20px 40px;

    @media (max-width: 700px), (max-height:700px)  {
        padding:8px 8px 5px 8px;
    }  
    @media (max-width: 730px)  {
      padding:20px 20px 20px 20px;
    } 
    @media (max-width: 900px)  {
      padding:20px 20px 20px 20px;
    }  
    
    @media (max-height: 730px)  {
      padding:10px 10px 10px 10px;
    } 
    & .headerContainer {
      border-bottom:none!important;
      position:relative;
      right:25px;
      @media (max-width: 450px) {
        right:-5px;   
      } 
      @media (max-width: 380px) {
        right:-10px;   
      } 
    }

  }

  & .linkContainer {
    & .link {
        writing-mode: vertical-lr;
    }
  }


  .bodyContainer {
    height:100%;
    background-color:${props => props.theme.offBlack};
    width:100%;
    border-radius: 10px 0 0px 10px;
    display:flex;
    
    .infoContainer {
      display:flex;
      height:100%;
      width:80%;
      padding:100px 30px 80px 80px;
      font-weight:500;
      flex-direction:column;
      @media (max-width: 1400px) {
        width:90%;
        padding:70px 30px 40px 40px;      
      } 
      @media (max-width: 450px) {
        width:95%;
        padding:40px 10px 10px 20px;      
      } 
          
      @media (max-height: 730px)  {
        padding:20px 20px 20px 20px;
      } 
      h1 {
        color: white !important;
        margin-bottom:50px;
        font-size:55px!important;
        @media (max-width: 1200px) {
          font-size:45px!important;   
        } 
        @media (max-width: 800px) {
          font-size:35px!important; 
        } 
      }
      p {
        color: white;
        max-width:900px;
        font-size:25px!important;
        line-height:50px;
        @media (max-width: 1200px) {
          font-size:20px!important;   
        } 
        @media (max-width: 800px) {
          font-size:16px!important; 
          line-height:30px;  
        } 
      }
      p:nth-of-type(2){
        margin-top:60px;
        font-size:23px!important;
        @media (max-width: 1200px) {
          margin-top:40px;
          font-size:20px!important;   
        } 
        @media (max-width: 800px) {
          margin-top:20px;
          font-size:16px!important; 
          line-height:30px;  
        } 
      }
      span {
        color: ${props => props.theme.popColor}!important;
      }

      .personalLinkContainer {
        display:flex;
        justify-content:space-between;
        height:70px;
        width:180px;
        margin-top:auto;

        img {
          height:100%;
        }
        img:nth-of-type(2){
          height:115%;
          position:relative;
          bottom:5px;
        }
        @media (max-width: 800px) {
          height:50px;
          width:110px;
        }
      }
    }
    .skillsContainer {
      display:flex;
      height:100%;
      width:20%;
      flex-wrap:wrap;
      flex-direction:column;
      padding:80px 80px 80px 40px;
      justify-content:space-around;
      border-left:2px solid ${props => props.theme.popColor};
      @media (max-width: 1400px) {
        width:10%;
      } 
      @media (max-width: 450px) {
        width:15%;
        padding:40px 15px 10px 10px;      
      } 
      .skillContainer {
        height:9%;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        p {
          color:white;
          @media (max-width: 1400px) {
            display:none;
          }   
        }
        
        img {
          width:30%;
          margin-left:auto;
          @media (max-width: 1400px) {
            width:auto;
            height:80%;
          }  
          @media (max-width: 450px) {
            margin-left:none;
            height:40%;
          } 
        }
      }
    }
  }
`


const Main = ({mainInitial, setEnterDirection, globalSlideAnimationDuration, setMainInitial, width, setOpenMobileMenu, openMobileMenu }) => {
  const history = useHistory();
  const [ exiting, setExiting ] = useState(false);
   
  const handlePageChangeMain = (page) => {
    setExiting(true);

    if(page === '/projects'){
      setEnterDirection(true);
    }
    history.push(page);
  }

  const handlers = useSwipeable({
    onSwipedDown: () => {
        if(width <= 900){
          setEnterDirection(false);
          history.push('/projects')
        }
    },
    preventDefaultTouchmoveEvent: true,
  });

  
  return(
    <Wrapper
      {...handlers}
      initial={ 
        mainInitial 
        ? width <= 900 ? {y: `-100vh`} : {x: `-100vw`} 
        : false
      }
      animate={width <= 900 ? {y: 0} : {x: 0} }
      exit={
        width <= 900
        ? {y: `-100vh` }
        : {x: `-100vw` }
      }
      transition={{
        x: { type: "easeInOut", duration:globalSlideAnimationDuration },
        opacity: { duration: 1 }
      }}
    >
        <ReactTooltip />

        <div className="contentContainer">
          <div className="headerContainer">
              <MobileBurger setOpenMobileMenu={setOpenMobileMenu} openMobileMenu={openMobileMenu}/>
          </div>


          <div className="bodyContainer">
            <div class="infoContainer">
              <h1>Hello, my name is <span data-tip="Thats me!">Owen</span>. I'm a web developer.</h1>
              <p>Currently working for a leading South West design agency, i'm always looking for new opportunities and experiences.</p>

              {
                (width <= 800) 
                ? <></>
                : <p>You can see some of the technologies I love and use on the right, as well as links to my projects and contact page. Please take a look and feel free to get in touch.</p>
              }
              
              <div className="personalLinkContainer">
                <img src={githubIcon}/>
                <img src={CVIcon}/>
              </div>
            </div>
            
            <Fade cascade duration={2000} delay={500}>
              <div className="skillsContainer">
                <div className="skillContainer">
                  <p>JavaScript</p>
                  <img src={jsIcon}/>
                </div>
                <div className="skillContainer">
                <p>React.js</p>
                  <img src={reactIcon}/>
                </div>
                <div className="skillContainer">
                  <p>Typescript</p>
                  <img src={TypescriptIcon}/>
                </div>
                <div className="skillContainer">
                  <p>Node.js</p>
                  <img src={nodeIcon}/>
                </div>
                <div className="skillContainer">
                  <p>PHP</p>
                  <img src={phpIcon}/>
                </div>
                <div className="skillContainer">
                  <p>CSS</p>
                  <img src={cssIcon}/>
                </div>
                <div className="skillContainer">
                  <p>SASS</p>
                  <img src={sassIcon}/>
                </div>
                <div className="skillContainer">
                  <p>PostgreSQL</p>
                  <img src={postgresIcon}/>
                </div>
                <div className="skillContainer">
                  <p>Boostrap</p>
                  <img src={bootstrapIcon}/>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="linkContainer">
          <div className="projectLink link link-b-main" onClick={()=>handlePageChangeMain('/projects')}>Projects</div>
          <div className="projectLink link link-a-main" onClick={()=>handlePageChangeMain('/contact')}>Contact</div>
        </div>

        <MobileMenu setOpenMobileMenu={setOpenMobileMenu} handlePageChangeMain={handlePageChangeMain} openMobileMenu={openMobileMenu} />
    </Wrapper>
  )
}


export default Main;