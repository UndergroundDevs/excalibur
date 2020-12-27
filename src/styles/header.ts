import styled from 'styled-components';

export const Header = styled.header<{ isColoraBlue: boolean }>`
  width: 100%;
  height: 80px;
  position: fixed;
  background: transparent;

  .container-logo {
    background: linear-gradient(180deg, #222967 66.1%, #27427E 5000.53%);
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .container-logo h1 {
    text-decoration: none;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 500;
    color:#FFFFFF;
    font-size: 30px;
    margin-left: 8px;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem 0 3rem;
    transition: 1s;

    .container-logo {
      display: flex;
      justify-content: start;
      width: 159.34px;
      background: transparent;
    }
  }
`;

export const Nav = styled.nav<{open: boolean}>`
  width: 100%;
  height: auto;
  padding: 10px 0 30px 0;
  transition: all .5s;
  top: ${({ open }) => (open ? "80px" : "-160px" )};
  position: absolute;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #222967 66.1%, #27427E 2000.53%);

  a {
    width: 100%;
    height: 30px;
    font-size: 14px;
    margin: 5px 0 5px 0;
    text-align: center;
    text-decoration: none;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    color:#FFFFFF;
    text-transform: uppercase;
    white-space: nowrap;
  }

  @media (min-width: 1024px) {
    position: static;
    z-index: 1;
    flex-direction: row;
    width: auto;
    height: 100%;
    padding: 0 !important;

    a {
      height: auto;
      font-size: 0.9rem;
    }

    a + a {
      margin: 0 0 0 1rem;
    }

    background: transparent;
  }
`;

export const Buttom = styled.div<{open: boolean}>`
  right: 10px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 35px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  
  span {
    width: 20px;
    height: 3px;
    background-color: #FFF;
    transform: ${({ open }) => (open ? "translate(0px, 0px) rotate(45deg)" : "#FFF" )};
    position: absolute;
    border-radius: 20px; 
    transition: all 0.5s;
  }

  
  span::after {
    content: '';
    width: 20px;
    height: 3px;
    top: -10px;
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 20px; 
    transform: ${({ open }) => (open ? "translate(0px, 10px) rotate(0deg)" : "#FFF" )};
    transition: all .5s;
  }

  span::before {
    content: '';
    width: 20px;
    height: 3px;
    bottom: -10px;
    position: absolute;
    background-color: #FFFFFF;
    border-radius: 20px; 
    transform: ${({ open }) => (open ? "translate(0px, -10px) rotate(-90deg)" : "#FFF" )};
    transition: all .5s;
  }

  @media (min-width: 375px) {
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    
    span {
      width: 30px;
      height: 3px;
      background-color: #FFF;
      transform: ${({ open }) => (open ? "translate(0px, 0px) rotate(45deg)" : "" )};
    }

    
    span::after {
      width: 30px;
      height: 3px;
      top: -10px;
      transform: ${({ open }) => (open ? "translate(0px, 10px) rotate(0deg)" : "" )};
    }

    span::before {
      content: '';
      width: 30px;
      height: 3px;
      bottom: -10px;
      transform: ${({ open }) => (open ? "translate(0px, -10px) rotate(-90deg)" : "" )};
      transition: all .5s;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;