import React  from 'react';
import styled from "styled-components";
import linkedinIcon from  "../img/linkedin.png";
import githubIcon from  "../img/github.png";
import resumeIcon from  "../img/resume.png";

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

   & img {
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
         <img alt="Resume link" data-tip="Take a look at my CV!"  src={resumeIcon}/>
         <img alt="Github link"src={githubIcon}/>
         <img alt="Linkedin link"src={linkedinIcon}/>
      </Wrapper>
   )
}

export default LinksContainer;