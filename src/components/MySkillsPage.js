import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import bgimg from '../assets/Images/bgport.jpg';

const Box = styled.div`
background-image: url(${bgimg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
@media only screen and (max-width: 700px) {
    /* For everything bigger than 700px */
    background-image: url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height:100vh;
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    
  }


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    box-shadow: 0 0 25px 20px rgba(0,0,255,0.2);
}

@media only screen and (max-width: 700px) {
    /* For everything bigger than 700px */
    padding: 0.5rem 1rem 0.5rem 1rem;
    width: 60vw;
    height: 30vh;
    z-index:3;
    margin-left:50px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}


`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

@media only screen and (max-width: 700px) {
    /* For everything bigger than 700px */
    font-size: calc(0.6em);
    padding:0;
   
}
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
    @media only screen and (max-width: 700px) {
        /* For everything bigger than 700px */
        margin-bottom: 1000px;
    }
}
ul{
    margin-left: 2rem;
    @media only screen and (max-width: 700px) {
        /* For everything bigger than 700px */
        padding-bottom:30px;
       
    }
}
p{
    margin-left: 1rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} />Game Designer/Developer
</Title>
<Description>

</Description>
<Description>
<ul>
    <li>
        Game Environment Design
    </li>
    <li>
        Character Modelling
    </li>
    <li>
        Game logic Scripting
    </li>
    <li>
        Game AI Engineer
    </li>
    <li>
        Game Database/Server Development
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>

    <p>
       UNITY3D ~ Unreal Engine ~ BLENDER
    </p>
  

<strong>Skills</strong>

    <p>
       C# ~ C++ ~ Python
    </p>
  

</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Blockchain Developer
</Title>
<Description>
</Description>
<Description>
<ul>
    <li>
       Smart Contracts Development
    </li>
    <li>
        NFT Marketplace Development
    </li>
    <li>
        Decentralized Application Development
    </li>
    <li>
        Smart Contract debugging
    </li>
  
</ul>
</Description>
<Description>
<strong>Skills</strong>
<p>
    Solidity ~ Javascript ~ ReactJS ~ Rust .
</p>


</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
