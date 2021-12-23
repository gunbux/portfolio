import React from 'react'
import {
  MainContainer,
  MainContent,
  Links,
  Navigation,
  Arrow,
  LeftArrow,
  TermText,
  SquarePicture,
  NavContainer,
  SettingsContainer,
  Settings,
  CenterContainer,
} from "./styles/index.styled";
import ProfilePicture from '../assets/images/profile.jpg'

//TODO:
// - Main Content needs to be mobile friendly
// - Hide current nav bar and replace with mobile navbar
// - Add bottom navbar
// - Add some blur

export const Home = () => {
  return <MainContainer>
    <CenterContainer>
      <NavContainer>
        <Navigation>
          <Links col='#bd93f9'> ~/chunyu</Links><Arrow col='#bd93f9'/>
          <Links col='#f1fa8c'> /about</Links><Arrow col='#f1fa8c'/>
          <Links col='#8be9fd'>華 /experience</Links><Arrow col='#8be9fd'/>
          <Links col='#ffb86c'> /projects</Links><Arrow col='#ffb86c'/>
          <TermText>neofetch</TermText>
        </Navigation>
        <SettingsContainer>
          <LeftArrow col='#ffb86c' /><Settings col='#ffb86c'>Sat 10 Dec 16:43</Settings>
        </SettingsContainer>
      </NavContainer>
      <MainContent>
        <SquarePicture src={ProfilePicture}/>
        <div>
          chunyu@nus<br/>
          ------------<br/>
          OS: Windows/Arch Linux<br/>
          Name: Chun Yu<br/>
          Uptime: 21 Years<br/>
          Resolution: 1920x1080<br/>
          WM: Explorer/AwesomeWM<br/><br/>
           : Full-Time Student @ NUS<br/>
           : Computer Science<br/>
          : Windows Terminal/kitty<br/>
          <br/>
          {/*TODO: Color scheme?*/}
          {/*colors here<br />*/}
           linkedin  github  email
        </div>
      </MainContent>
    </CenterContainer>
  </MainContainer>
}