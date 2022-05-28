import React from 'react';
import styled from "styled-components";
import HeadShake from 'react-reveal/HeadShake';
import cssIcon from '../img/css.svg';
import jsIcon from '../img/js.svg';
import nodeIcon from '../img/node.svg';
import bootstrapIcon from '../img/bootstrap.png';
import wordpressIcon from '../img/wordpress.png';
import phpIcon from '../img/php.png';
import reactIcon from '../img/react.svg';
import postgresIcon from '../img/postgres.svg';
import sassIcon from '../img/sass.svg';
import closeIcon from '../img/close.png';
import closeIconRed from '../img/closeRed.png';


const Wrapper = styled.div`
   position:absolute;
   height:100%;
   width:100%;
   top:0;
   left:0;
   background-color:${props => props.theme.offBlack};
   z-index:9999999999999;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;

   .close {
      position:absolute;
      top:40px;
      right:40px;
      width:50px;
      height:50px;
      z-index:99999999999999;
   }


   div {
      display:flex;
      width:100%;
      height:50%;
      flex-wrap:wrap;
      justify-content:center;
      text-align:center;
      padding:20px;
      gap:30px;

      img {
         width:100px;
         height:100px;
      }


      h2 {
         width:100%;
         padding:10px;
         font-size:2rem;
      }
   }

   .codeContainer {
      background-color:orange;
   }

   .styleContainer {
      background-color:red;
   }
`


const SkillModal = () => {

   return (
      <Wrapper>
         <img src={closeIconRed} className="close"/>
         <div className="codeContainer">
            <h2>Code</h2>
            <img src={jsIcon}/>
            <img src={nodeIcon}/>
            <img src={phpIcon}/>
            <img src={reactIcon}/>
            <img src={postgresIcon}/>
            <img src={wordpressIcon}/>

         </div>

         <div className="styleContainer">
            <h2>Style</h2>
            <img src={cssIcon}/>
            <img src={bootstrapIcon}/>
            <img src={sassIcon}/>
         </div>        
      </Wrapper>
   )
}


export default SkillModal;