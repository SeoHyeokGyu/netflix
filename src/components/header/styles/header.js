import styled from "styled-components/macro";
import {Link as ReactRouterLink} from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  //background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../images/misc/home-bg.jpg");
   background: linear-gradient(
           to top, 
           rgba(0, 0, 0, .1) 10%,
           rgba(0, 0, 0, .3) 70%,
           rgba(20, 20, 20, .7)
   ),
   
   linear-gradient(
           to bottom,
           rgba(0, 0, 0, .1) 10%,
           rgba(0, 0, 0, .3) 70%,
           rgba(20, 20, 20, .7)
   ),
   url(${({src}) => (src ? `../images/misc/${src}.jpg` :
          '../images/misc/home-bg.jpg')}) top left / cover no-repeat ;
  word-break: keep-all;
`;

export const Frame = styled.div`
`;

export const Container = styled.div`
  display: flex;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  margin-left: 40px;
  
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  margin-right: 40px;

  &:hover {
    background-color: #f40612;
  }
`;