import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import {motion} from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { Design } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitlte';
import bgimg from '../assets/Images/bgport.jpg';

const Box = styled.div`
background-image:url(${bgimg});
background-size: auto;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center top;
height:420vh;

position: relative;
display: flex;
align-items: center;

@media only screen and (max-width: 700px) {
  /* For everything bigger than 700px */
  height:475vh;
  overflow:hidden;
}
`
const Sp = styled.div`
color: white;
`
const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem);
height: 40vh;
display: flex;

color:white;
@media only screen and (max-width: 700px) {
  /* For everything bigger than 700px */
  top: 8rem;
  left:10%;
}
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`


// Framer-motion Configuration
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);



    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
          return (yinyang.current.style.transform =
            'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])


    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='light'/>
<PowerButton />

     <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>
<Rotate ref={yinyang} >
    <Sp><span>Scroll up for more</span></Sp>
    <Design  width={80} height={80} fill={lightTheme.text} />
    
</Rotate>

<BigTitlte text="WORK" top='10%' right="20%" />
        </Box>
        </ThemeProvider>
        
    )
}

export default WorkPage
