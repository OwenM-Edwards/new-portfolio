// Menu.styled.js
import styled from 'styled-components';
import {LinksContainer} from '../components/index';


export const MobileMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.offBlack};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index:999999999;
  transform: ${({ openMobileMenu  }) => openMobileMenu  ? 'translateX(0%)' : 'translateX(-100%)'};
  border-right:15px solid ${props => props.theme.popColor};
  width:100%;

  @media (min-width: 900px) {
    display:none;
  }

  .textContainer {
    height:80%;
    display:flex;
    flex-direction:column;
    padding-top:90px;
    span {
      font-size: 1.5rem;
      text-transform: uppercase;
      padding:30px 0 30px;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s linear;
      cursor: pointer;


      &:hover {
        color:${props => props.theme.popColor};
      }
    }
  }

  
  .socialContainer {
    height:20%;
    position:relative;
    right:55px;
    div {
      display: block!important;
    }
  }
`;


const MobileMenu = ({ setOpenMobileMenu, handlePageChangeMain, handlePageChange, openMobileMenu, handleProjectsLink, handleMainLink }) => {
    const handlePageChangeMobile = (destination) => {
      setOpenMobileMenu(false);
      switch(destination) {
        case 'home':
          if(window.location.pathname === '/projects') {
            handlePageChange('home');
          }
          else if(window.location.pathname === '/contact') {
            handleMainLink()
          }
        break;

        case 'projects':
          if(window.location.pathname === '/contact') {
            handleProjectsLink()
          }
          else if(window.location.pathname === '/home') {
            handlePageChangeMain('/projects')
          }
        break;

        case 'contact':
          if(window.location.pathname === '/projects') {
            handlePageChange('contact');
          }
          else if (window.location.pathname === '/home'){
            handlePageChangeMain('/contact')
          }
        break;


        default:

        break;
      }
    }

    
    return (
      <MobileMenuStyled openMobileMenu={openMobileMenu}>
        <div className="textContainer">
          <span onClick={() => handlePageChangeMobile('home')}>
            <span role="img" aria-label="Home">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
            Home
          </span>
          <span onClick={() => handlePageChangeMobile('projects')}>
            <span role="img" aria-label="Projects">&#x1f4b8;</span>
            Projects
          </span>
          <span onClick={() => handlePageChangeMobile('contact')}>
            <span role="img" aria-label="Contact">&#x1f4e9;</span>
            Contact
          </span>
        </div>

        <div className="socialContainer" >
          <LinksContainer className="linksContainer"/>
        </div>
      </MobileMenuStyled>
    )
}


export default MobileMenu;