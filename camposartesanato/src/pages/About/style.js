import styled from "styled-components";
import { mediaQ } from '../../ui/MediaQuery';

export const Background = styled.div`
  background-size: 100% 100%;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #FDC3C2;
  display: flex;
  justify-content: center;
  align-items: center;

   ${mediaQ.mobile} {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
`;

export const Left = styled.div`
    width: 60vw;
    height: 100vh;
    background: whitesmoke;
    font-size: 20px;
    font-weight: bold;
    color: #653332;
    display: flex;
    flex-direction: column;
`;

export const Right = styled.div`
    background: blanchedalmond;
    width: 40vw;
    height: 100vh;
`;