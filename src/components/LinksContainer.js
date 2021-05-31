import React  from 'react';
import styled from "styled-components";
// import linkedinIcon from  "../img/linkedin.png";
import githubIcon from  "../img/github.png";
import resumeIcon from  "../img/resume.png";
import CV from "../img/Owen_Edwards_CV.pdf";

const Wrapper = styled.div`
   width:100%;
   height:30px;
   display:flex;
   position: absolute;
   margin:10px 0 0 10px;
   z-index:5;
   
   @media (max-width: 700px) {
      display:none;
   }

   & a {
      height:100%;
      &:nth-of-type(1){
         height:113%;
         position: relative;
         bottom:2px;
      }
   }
   & img {
      height:100%;
      cursor: pointer;
      margin-right:5px;
      transition:scale 0.2s ease-in-out;

      &:hover {
         scale:0.9;
      }
   }
`
const LinksContainer = () => {

   return (
      <Wrapper>
         <a target="blank" href={CV}><img alt="Resume link" data-tip="Take a look at my CV!"  src={resumeIcon}/></a>
         <a target="blank" href="https://github.com/OwenM-Edwards"><img alt="Github link" data-tip="My github profile." src={githubIcon}/></a>
         {/* <img alt="Linkedin link"src={linkedinIcon}/> */}
      </Wrapper>
   )
}

export default LinksContainer;