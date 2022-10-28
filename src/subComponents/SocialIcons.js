import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Linkedin, Github, Twitter, YouTube } from '../components/AllSvgs'
import {lightTheme} from '../components/Themes'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color:white;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled(motion.span)`
width: 2px;
height: 9rem;
background-color: white;
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"http://Github.com/promise-csharp"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? lightTheme.text  : lightTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:" https://twitter.com/DiaP_Music"}}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? lightTheme.text  : lightTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.linkedin.com/in/promise-emmanuel-76300b230"}}>
                    <Linkedin width={25} height={25} fill={props.theme === "dark" ? lightTheme.text  : lightTheme.body  } />
                </NavLink>
            </motion.div>
            
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://youtube.com/channel/UCPWYAySmkZmhBbq0rxS4G6Q"}}>
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? lightTheme.text  : lightTheme.body  } />
                </NavLink>
            </motion.div>

            <Line color={props.theme}

initial={
    {
        height:0
    }
}
animate={{
    height: '2.5rem'
}}
transition={{
    type:'spring', duration:1, delay:0.8
}}
            />
        </Icons>
    )
}

export default SocialIcons
