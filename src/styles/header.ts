import styled from 'styled-components';

export const Header = styled.header<{ isColoraBlue: boolean }>`
  width: 100%;
  height: 80px;
  position: fixed;
  background: transparent;
  z-index: 100;

  .container-logo {
    background: #040A25;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-logo a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  
  .container-logo a h1 {
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
    padding: 0 6rem 0 6rem;
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
  background: #040A25;

  a {
    width: 100%;
    height: 30px;
    font-size: 16px;
    margin: 5px 0 5px 0;
    text-align: center;
    text-decoration: none;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 500;
    color:#FFFFFF;
    text-transform: capitalize;
    white-space: nowrap;
  }

  a::before {
    content: "●";
    color: #1789FC;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }

  button {
    background-color: #1789FC; /* Green */
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    font-family: 'Fira Sans', sans-serif;
    display: inline-block;
    font-size: 16px;
    min-width: 140px;
    border-radius: 4px;
    font-weight: 500;
  }

  button:active{
    background-color: #274690;
    duration: 1s;
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
      font-size: 1rem;
    }

    button {
      background-color: #1789FC; /* Green */
      border: none;
      color: white;
      padding: 12px 20px;
      text-align: center;
      text-decoration: none;
      font-family: 'Fira Sans', sans-serif;
      display: inline-block;
      font-size: 16px;
      min-width: 140px;
      border-radius: 4px;
      font-weight: 500;
    }

    a + a {
      margin: 0 0 0 4rem;
    }

    a + button {
      margin: 0 0 0 4rem;
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