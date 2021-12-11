import React from 'react'
import './styles/index.styled'
import {MainContainer, MainContent, Links, Navigation, Arrow, TermText} from "./styles/index.styled";

export const Home = () => {
  return <MainContainer>
    <Navigation>
      <Links col='#bd93f9'> ~/chunyu</Links><Arrow col='#bd93f9' />
      <Links col='#f1fa8c'> about</Links><Arrow col='#f1fa8c' />
      <Links col='#8be9fd'>華 experience</Links><Arrow col='#8be9fd' />
      <Links col='#ffb86c'> projects</Links><Arrow col='#ffb86c' />
      <TermText>neofetch</TermText>
    </Navigation>
    <MainContent>
      <br />
      chunyu@nus<br />
      ------------<br />
      OS: Windows/Arch Linux<br />
      Name: Chun Yu<br />
      Uptime: 21 Years<br />
      Resolution: 1920x1080<br />
      WM: Explorer/AwesomeWM<br /><br />
       : Full-Time Student @ NUS<br />
       : Computer Science<br />
      : Windows Terminal/kitty<br />
      <br />
      {/*TODO: Color scheme?*/}
      {/*colors here<br />*/}
       linkedin  github  email
    </MainContent>
  </MainContainer>
}