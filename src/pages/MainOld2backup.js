// import React, {useEffect, useState, useRef} from 'react';
// import styled, { keyframes } from "styled-components";
// import {useHistory} from 'react-router-dom';
// import cssIcon from '../img/css.svg';
// import jsIcon from '../img/js.svg';
// import rotateRing from '../img/rotateRing.png';
// import outerRingLeftMobile from '../img/outerRingLeftMobile.png';
// import outerRingLeft from '../img/outerRingLeft2.png';
// import outerRingRightMobile from '../img/outerRingRightMobile.png';
// import outerRingRight from '../img/outerRingRight2.png';
// import outerRingBottom from '../img/outerRingBottom2.png';
// import nodeIcon from '../img/node.svg';
// import bootstrapIcon from '../img/bootstrap.png';
// import wordpressIcon from '../img/wordpress.png';
// import phpIcon from '../img/php.png';
// import reactIcon from '../img/react.svg';
// import sassIcon from '../img/sass.svg';
// import postgresIcon from '../img/postgres.svg';
// import arrowRed from '../img/arrowRed.png';
// import Fade from 'react-reveal/Fade';
// import HeadShake from 'react-reveal/HeadShake';
// import { useSwipeable } from 'react-swipeable';
// import ReactTooltip from 'react-tooltip';
// import profilePicDark from '../img/profileDark.png'
// import { WrapperSrc } from '../styled/styles';
// import githubIcon from  "../img/github.png";
// import resumeIcon from  "../img/resume.png";
// import CV from "../img/Owen_Edwards_CV.pdf";
// import {MobileBurger, MobileMenu} from '../components/index';



// const expand = keyframes`
//   0% {
//     transform: scale(0); 
//   }
//   100% {
//     transform: scale(1); 
//   }
// `
// const contract = keyframes`
//   0% {
//     transform: scale(1); 
//   }
//   100% {
//     transform: scale(0); 
//   }
// `

// const Wrapper = styled(WrapperSrc)`
//   z-index:9999;
//   overflow:hidden!important;
  
//   & .contentContainer {
//     height:100%;
//     width:100%;
//     flex-grow:1;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     padding-top:40px;


//     & .largeRing {
//       position:absolute;
//       border-radius: 50%;
//       background: green;
//       margin-left:auto;
//       margin-right:auto;
//       transform: translate(-0%,-0%);
//       height:${props => props.ringHeight};
//       box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
//       width:90%;
//       transition:width 0.2s easeInOut, height 0.2s easeInOut;
//       max-width:2300px;
//       background: radial-gradient(ellipse at     center, 
//         rgba(255,113,12,0) 30%,
//         #1d1d1d 30.1%);

//       @media (max-width: 1200px) {
//         width:110%;
//       }
//       @media (max-width: 1000px) {
//         width:160%;
//       }
//       @media (max-width: 950px) {
//         width:150%;
//       }
//       @media (max-width: 700px) {
//         width:180%; 
//       } 
//     }
//     & .expand {
//       animation-name: ${expand};
//       animation-duration: 1s;
//       animation-iteration-count: 1;
//     }
//     & .contract {
//       animation-name: ${contract};
//       animation-duration: 1.5s;
//       animation-iteration-count: 1;
//     }
    

//     & h1 {
//       color:white;
//       font-size:3.0rem;
//       padding:30px;
//       width:auto;
//       max-width:80%;
//       border-radius:0px 20px 20px 0;
//       margin:0 auto;
//       text-align:center;
//       z-index:999999;
//       position: absolute;
//       top:10%;
//       @media (max-width: 900px) {
//         font-size:2.0rem;
//         top:2%;
//       }
//     }
//     & span {
//       color:${props => props.theme.popColor};
//       text-shadow: 1px 1px ${props => props.theme.popColor};
//     }

//     & .arrowContainer {
//       display:flex;
//       flex-direction:column;
//       text-align:center;
//       justify-content:flex-end;
//       align-items:flex-end;
//       margin-left:auto;
//       position: absolute;
//       bottom:5%;
//       right:10%;
//       z-index:999999999;
//       @media (max-width: 700px) {
//         top:0%;
//       }
//       & .arrowText {
//         font-size:1.3rem;
//         color:white;
//         z-index:999999999;
//         @media (max-width: 700px) {
//           font-size:0.9rem;
//           width:50%;
//         }
//       }
//       & .arrow {
//         width:120px;
//         height:50px;
//         position: relative;
//         right:20px;
//         @media (max-width: 700px) {
//           width:60px;
//           height:20px;
//         }
//         @media (max-width:900px) {
//           /* width:90%;
//           height:40%; */
//           transform:rotate(90deg)
//         }
//       }
//     }
//   }
// `

// const animate = keyframes`
//   0%{
//      transform: rotateY(0deg);
//   }
//   100%{
//       transform: rotateY(360deg);
//   }
// `

// const ProfileImgContainer = styled.div`
//   width:60%;
//   height:40%;
//   max-width:600px;
//   position:relative;
//   display:flex;
//   justify-content:center;
//   @media (max-width: 1000px) {
//     width:70%;
//     height:50%;
//   }
//   @media (max-width: 700px) {
//     width:90%;
//     height:40%;
//   }
  
//   & .profilePic {
//     width:60%;
//     height:100%;
//     background-position:center;
//     background-repeat:no-repeat;
//     background-size: contain;
//     display:flex;
//     justify-content:center;
//     align-content:center;
//     border-radius:100%;
//     position:relative;
//     z-index:9999999;  
//     filter:drop-shadow(2px 4px 8px #1d1d1d);
//     /* animation: ${animate} 1s linear infinite;
//   perspective: 800px; */
  
//     & .rotateRing {
//       min-width:110%;
//       height:110%;
//       background-position:center;
//       background-repeat:no-repeat;
//       background-size: contain;
//       border-radius:50%;
//       z-index:9999;  
//       position:relative;
//       bottom:3.5%;
//       will-change: transform;
//       pointer-events: none;
//       @media (max-width:1000px) {
//         display:none;
//       }
//     }
//   }

//   & .leftRingContainer {
//     position:absolute;  
//     width:20%;
//     height:100%;
//     left: 0; 
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     z-index:9999999;
//     filter:drop-shadow(2px 4px 8px #1d1d1d);
//     & img {
//       cursor: pointer;
//     } 
//     @media (max-width:1000px) {
//       cursor:pointer!important;
//     }
//     & .outerRingLeft {
//       width:100%;
//     }
//     @media (min-width: 1100px) and (max-width: 1700px) {
//       filter:drop-shadow(-1.5px 1px 1px #F9A825);
//     }
//     @media (max-width: 900px) {
//       filter:drop-shadow(-1.5px 1px 1px #F9A825);
//     }
//   }
//   & .rightRingContainer {
//     position:absolute;  
//     width:20%;
//     height:100%;
//     right: 0; 
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     filter:drop-shadow(2px 4px 8px #1d1d1d);
//     z-index:9999999;
//     & img {
//       cursor: pointer;
//     } 
//     & .outerRingRight {
//       width:100%;
//     }
//     @media (min-width: 1100px) and (max-width: 1700px) {
//       filter:drop-shadow(2px 1px 1px #F9A825);
//     }
//     @media (max-width: 900px) {
//       filter:drop-shadow(2px 1px 1px #F9A825);
//     }
//   }

//   & .skillContainer {
//     position:absolute;
//     width:100%;
//     height:100%;
//     display:flex;
//     align-items:center;
//     justify-content:space-between;
//     transform: scale(2.5); 
//     @media (max-width:1000px) {
//         display:none;
//       }

//     .skillInnerWrapper {
//       width:30%;
//       height:100%;
//       display:flex;
//       justify-content:center;

//       .jsContainer {
//         display:none;
//         flex-direction:row;
//         height:auto;
//         width:100%;
//         z-index:999999999999999999999999;
//         flex-wrap:no-wrap;
//         justify-content:center;
//         align-items:center;
//         img {
//           width:65%;
//           margin:auto 0 auto 0;
//         }
//         & .innerItems{
//           display:flex;
//           flex-direction:column;
//           flex-wrap:no-wrap;
//           width:33%;
//           justify-content:center;
//           align-items:center;
//           box-sizing: border-box;
//           height:40%;
//           img{
//             width:50%;
//           }
//         }

//         & .centerItems{
//           display:flex;
//           flex-direction:column;
//           flex-wrap:no-wrap;
//           width:33%;
//           justify-content:center;
//           align-items:center;
//           height:40%;
//           img{
//             width:50%;
//           }
//         }
//         & .outerItems {
//           display:flex;
//           flex-direction:column;
//           flex-wrap:no-wrap;
//           width:33%;
//           height:30%;
//           justify-content:center;
//           align-items:center;
//           img {
//             width:75%;
//           }
//         }
//       }
      
//       .CSSContainer {
//         display:none;
//         flex-direction:row;
//         height:auto;
//         width:100%;
//         z-index:999999999999999999999999;
//         flex-wrap:no-wrap;
//         justify-content:center;
//         align-items:center;
//         /* background-color:blue; */
  
//         img {
//           width:45%;
//           margin:auto 0 auto 0;
//         }
//         & .innerItems{
//           display:flex;
//           flex-direction:column;
//           flex-wrap:no-wrap;
//           width:33%;
//           /* height:30%; */
//           justify-content:center;
//           align-items:center;
//           box-sizing: border-box;
//           /* background-color:orange; */
//           height:40%;
//           img:first-of-type{
//             width:45%;
//           }
//           img{
//             width:50%;
//           }
//         }

//         & .centerItems{
//           display:flex;
//           flex-direction:column;
//           flex-wrap:no-wrap;
//           width:33%;
//           height:30%;
//           justify-content:center;
//           align-items:center;
//           img {
//             width:70%;
//           }
//         }
//         & .outerItems {
//           display:flex;
//           flex-direction:column;
//           flex-wrap:no-wrap;
//           width:33%;
//           height:30%;
//           justify-content:center;
//           align-items:center;
//           img {
//             width:75%;
//           }
//         }
//       }
//     }

//     .OtherContainer {
//       display:none;
//     }

//     .show {
//       display:flex!important; 
//     }
//   }
// `


// const Main = ({setEnterDirection, globalSlideAnimationDuration, mainInitial, width, height, openMobileMenu, setOpenMobileMenu}) => {
//   const [ ringHeight, setRingHeight ] = useState('100%');
//   const [ exiting, setExiting ] = useState(false);
//   const [showSkillModal, setShowSkillModal] = useState(false);
//   const history = useHistory();
//   const LargeRingRef = useRef(null);
//   const CSSContainerRef = useRef(null);
//   const JSContainerRef = useRef(null);
//   const RotateRingRef = useRef(null);

//   const handlers = useSwipeable({
//     onSwipedUp: () => {
//       if(width <= 900){
//         handlePageChangeMain('/projects')
//       }
//     },
//     preventDefaultTouchmoveEvent: true,
//   });
  

//   const handlePageChangeMain = (page) => {
//     setExiting(true);
//     let LargeRing2 = LargeRingRef.current;
//     LargeRing2.classList.remove('expand');
//     LargeRing2.classList.add('contract');

//     if(page === '/projects'){
//       setEnterDirection(true);
//     }
//     history.push(page);
//   }


//   useEffect(() => {   
//     const LargeRing = LargeRingRef.current;

//     const RotateRing = RotateRingRef.current;
//     let imgRotateRingRect = RotateRing.getBoundingClientRect();
//     let imgRotateRingCenter = {
//       x: imgRotateRingRect.left + imgRotateRingRect.width/2, 
//       y: imgRotateRingRect.top + imgRotateRingRect.height/2
//     };

//     const CSSContainer = CSSContainerRef.current;
//     const JSContainer = JSContainerRef.current;

//     LargeRing.classList.remove('contract');
//     LargeRing.classList.add('expand');

//     const updateRotateRing = () => {
//       imgRotateRingRect = RotateRing.getBoundingClientRect();
//       imgRotateRingCenter = {
//         x: imgRotateRingRect.left + imgRotateRingRect.width/2, 
//         y: imgRotateRingRect.top + imgRotateRingRect.height/2
//       };
//     }
//     setTimeout(updateRotateRing, 700)
    

//     const addRevealListner = (e) => {
//       if(e.pageX <= width / 2 && e.pageY <= height / 2 + 200 && e.pageY >= height / 2 - 200 ){
//         JSContainer.classList.remove('show');
//         CSSContainer.classList.add('show');
//       }
//       else if(e.pageX >= width / 2 && e.pageY <= height / 2 + 200 && e.pageY >= height / 2 - 200  ){
//         CSSContainer.classList.remove('show');
//         JSContainer.classList.add('show');
//       }
//       else {
//         CSSContainer.classList.remove('show');
//         JSContainer.classList.remove('show');
//       }
//     }

//     const addRotation = (e) => {
//       let angle = Math.atan2(e.pageX - imgRotateRingCenter.x, - (e.pageY - imgRotateRingCenter.y) )*(180 / Math.PI);      
//       RotateRing.style.transform = `rotate(${angle}deg)`;  
//     }

//     const calcRingWidth = () => {
//       setRingHeight(`${LargeRing.offsetWidth}px`)
//     }
   
//     window.addEventListener("mousemove", addRotation);
//     window.addEventListener('resize', calcRingWidth);
//     window.addEventListener('resize', updateRotateRing);
//     window.addEventListener("mousemove", addRevealListner);
//     calcRingWidth(); 

//     return () => {
//       window.removeEventListener("mousemove", addRotation);
//       window.removeEventListener("resize", calcRingWidth);
//       window.removeEventListener('resize', updateRotateRing);
//       window.removeEventListener("mousemove", addRevealListner);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


//   return(
//     <Wrapper
//       {...handlers}
//       initial={ 
//         mainInitial 
//         ? width <= 900 ? {y: `-100vh`} : {x: `-100vw`} 
//         : false
//       }
//       animate={width <= 900 ? {y: 0} : {x: 0} }
//       exit={
//         width <= 900
//         ? {y: `-100vh` }
//         : {x: `-100vw` }
//       }
//       transition={{
//         x: { type: "easeInOut", duration:globalSlideAnimationDuration },
//         opacity: { duration: 1 }
//       }}
//       ringHeight={ringHeight} 
//     >
      
//       <div className="contentContainer">
//         <div className="largeRing" ref={LargeRingRef}></div>
         
//         <Fade top><h1>Hello, my name is <span data-tip="Thats me!">Owen</span>. I'm a web developer.</h1></Fade> 

//         <HeadShake delay={2000} >
//           <div className="arrowContainer">
//             <h2 className="arrowText">Get in touch, or check out my projects here</h2>
//             <img alt="arrow" className="arrow" src={arrowRed}/>
//           </div>
//         </HeadShake> 

//         <ProfileImgContainer>
//           <Fade right>
//             <div className="leftRingContainer">
//               <img className="outerRingLeft" src={outerRingLeft }  onClick={()=>setShowSkillModal(true)}/>
//             </div>
//           </Fade>
          
//           <Fade left>
//             <div className="rightRingContainer">
//               <img className="outerRingRight" src={outerRingRight } onClick={()=>setShowSkillModal(true)}/>
//             </div>
//           </Fade>
            
//           <div className="profilePic" style={{backgroundImage: `url(${profilePicDark})`}}>

//             <div style={{backgroundImage: `url(${rotateRing})`}} className="rotateRing" ref={RotateRingRef}></div>

//           </div>

//           <div className="skillContainer">
//             <div className="skillInnerWrapper">
//               <div className="CSSContainer" ref={CSSContainerRef}>
//                 <Fade left delay={400} >
//                   <div className="outerItems">
//                   </div>
//                 </Fade>
//                 <Fade left delay={200}>
//                   <div className="centerItems">
//                   </div>
//                 </Fade>
//                 <Fade left>
//                   <div className="innerItems">
//                     <img alt="CSS3" data-tip="CSS3" src={cssIcon}/>
//                     <img alt="BOOTSTRAP" data-tip="Bootstrap" src={bootstrapIcon}/>
//                     <img alt="SASS" data-tip="SASS" src={sassIcon}/>
//                   </div>                
//                 </Fade>
//               </div>
//             </div>
            
//             <div className="skillInnerWrapper">
//               <div className="jsContainer"  ref={JSContainerRef}>
//                 <Fade right>
//                   <div className="innerItems">
//                     <img alt="JavaScript" data-tip="JavaScript" src={jsIcon}/>
//                     <img alt="React.js" data-tip="React.js" src={reactIcon}/>
//                     <img alt="Node.js" data-tip="Node.js" src={nodeIcon}/>
//                   </div>
//                 </Fade>
//                 <Fade right delay={200} >
//                   <div className="centerItems">
//                     <img alt="PostgreSQL" data-tip="PostgreSQL" src={postgresIcon}/>
//                     <img alt="phpIcon" data-tip="PHP" src={phpIcon}/>
//                     <img alt="Wordpress" data-tip="Wordpress" src={wordpressIcon}/>
//                   </div>
//                 </Fade>
//                 <Fade right delay={400} >
//                   <div className="outerItems">

//                   </div>
//                 </Fade>
//               </div>
//             </div>

//             <div className="OtherContainer">
//               <Fade top>
                
//               <a target="blank" href={CV}><img alt="Resume link" data-tip="Take a look at my CV"  src={resumeIcon }/></a>
//               <a target="blank" href="https://github.com/OwenM-Edwards"><img className="github" alt="Github link" data-tip="My github profile." src={githubIcon }/></a>
//               </Fade>
//             </div>
//           </div>

//         </ProfileImgContainer>
//         <ReactTooltip />
//       </div>
      
//       <div className="linkContainer">
//         <div className="projectLink link link-b-main" onClick={()=>handlePageChangeMain('/projects')}>Projects</div>
//         <div className="projectLink link link-a-main" onClick={()=>handlePageChangeMain('/contact')}>Contact</div>
//       </div>
//       <MobileBurger setOpenMobileMenu={setOpenMobileMenu} openMobileMenu={openMobileMenu}/>
//       <MobileMenu setOpenMobileMenu={setOpenMobileMenu} handlePageChangeMain={handlePageChangeMain} openMobileMenu={openMobileMenu} />
//     </Wrapper>
//   )
// }


// export default Main;