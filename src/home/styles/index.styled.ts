import styled from 'styled-components';
import * as color from "../../color";

export const MainContainer = styled.div`
  background-color: ${color.background};
  min-height: 100vh;
  //font-size: calc(10px + 2vmin);
  color: white;
`

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Arrow = styled.div<{ col: string }>`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid ${(props) => props.col ? props.col : color.orange};
  z-index: 1;
  margin-right: -10px;
  cursor: pointer;
`

export const TermText = styled.div`
  padding: 0 5px 0 15px;
`

//TODO: Adapt this to changable themes
export const Links = styled.div<{ col: string }>`
  background: ${(props) => props.col ? props.col : color.orange};
  padding: 0 5px 0 15px;
  color: black;
  cursor: pointer;  
`