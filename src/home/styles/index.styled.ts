import styled from 'styled-components';
import * as color from "../../color";

export const MainContainer = styled.div`
  background-color: ${color.background};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`

export const CenterContainer = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border: 1px solid white;
  border-radius: 20px;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px; 
  align-items: center;
`

export const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: calc(100vh - 65px);
  height: 80%;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Arrow = styled.div<{ col: string }>`
  width: 0;
  height: 0;
  border-top: 12.5px solid transparent;
  border-bottom: 12.5px solid transparent;
  border-left: 12.5px solid ${(props) => props.col ? props.col : color.orange};
  z-index: 1;
  margin-right: -12.5px;
  cursor: pointer;
`

export const LeftArrow = styled.div<{ col: string }>`
  width: 0;
  height: 0;
  border-top: 12.5px solid transparent;
  border-bottom: 12.5px solid transparent;
  border-right: 12.5px solid ${(props) => props.col ? props.col : color.orange};
  z-index: 1;
  cursor: pointer;
`

export const TermText = styled.div`
  padding: 0 5px 0 20px;
`

export const SquarePicture = styled.img`
  width: 250px;
  height: 250px;
  margin: 50px;
`

export const Links = styled.div<{ col: string }>`
  background: ${(props) => props.col ? props.col : color.orange};
  padding: 0 5px 0 25px;
  color: black;
  cursor: pointer;
  white-space: nowrap;
`

export const Settings = styled.div<{ col: string }>`
  background: ${(props) => props.col ? props.col : color.orange};
  padding: 0 20px 0 0;
  color: black;
  cursor: pointer;  
`