// Menu.styled.js
import styled from 'styled-components';

export const MobileMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.offBlack};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index:9999;
  transform: ${({ openMobileMenu  }) => openMobileMenu  ? 'translateX(0%)' : 'translateX(-100%)'};

  span {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;


const MobileMenu = ({ openMobileMenu, handleProjectsLink, handleMainLink }) => {
    const handlePageChange = (destination) => {
      switch(destination) {
        case 'home':
          
          break;
        case 'projects':
          break;

        case 'contact':
          switch (window.location.pathname) {
            case '/project' :
              
            break
          }
          break;
      }
      if(window.location.pathname === "/contact"){
        console.log('testing')
      }
      else {
        console.log('wrng')
      }
    }

    return (
      <MobileMenuStyled openMobileMenu={openMobileMenu}>
        <span onClick={() => handlePageChange('home')}>
          <span role="img" aria-label="Home">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
          Home
        </span>
        <span onClick={() => handlePageChange('projects')}>
          <span role="img" aria-label="Projects">&#x1f4b8;</span>
          Projects
          </span>
        <span onClick={() => handlePageChange('contact')}>
          <span role="img" aria-label="Contact">&#x1f4e9;</span>
          Contact
          </span>
      </MobileMenuStyled>
    )
}

export default MobileMenu;