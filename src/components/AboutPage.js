import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/flaw.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;


`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media only screen and (max-width: 700px) {
    /* For everything bigger than 700px */
    width: 50vw;
    height:70vh;
    padding: 1.5rem 2rem;
    left: calc(4rem + 1vw);
    top: 8rem;
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
           My name is Oluwadare Promise Emmanuel. I'm a Game Developer and Blockchain Developer based in Nigeria
        
<br /> <br/>
I'm a highly proficient Game Developer bringing proven history of successfully utilizing latest technologies to
create exciting games. Highly energetic professional with over 4 years of experience and meticulous eye
for detail. Thorough understanding of gaming trends combined with expertise in various programming
languages.
Knowledgeable professional with a background in Blockchain Development. A driven Fullstack
Blockchain Engineer known for reporting on the design process to the appropriate
stakeholders and debugging new and existing projects.
<br/> <br/>
 You can connect with me via social media links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
