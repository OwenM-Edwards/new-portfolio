import React from 'react';
import styled from 'styled-components';

export const StyledBurger = styled.button`
  width:50px;
  height:50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 99999999;


    position: absolute;
    margin:10px 0 0 10px;
   top:45px;
   right:40px;

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 0.25rem;
    background: ${props => props.theme.popColor};
    border-radius: 10px;
    transition: all 0.4s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ openMobileMenu }) => openMobileMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ openMobileMenu }) => openMobileMenu ? '0' : '1'};
      transform: ${({ openMobileMenu }) => openMobileMenu ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ openMobileMenu }) => openMobileMenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;



const MobileBurger = ({openMobileMenu, setOpenMobileMenu}) => {
  return (
    <StyledBurger openMobileMenu={openMobileMenu} onClick={() => setOpenMobileMenu(!openMobileMenu)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default MobileBurger;