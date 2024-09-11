import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'


import music from "../assets/audio/getit.mp3"


const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
right:10rem;
top:3rem;
z-index:10;
color:white;


&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay:  0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}

@media only screen and (max-width: 700px) {
    /* For everything bigger than 7px */
    right:1rem;
    top:3rem;
    
    
    h3{
        font-size:12px;
        margin-left:2px;
    }
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 1px;
margin:0 0.1rem

`

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        
        <Box onClick={() => handleClick()}>
            
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <div><h3>Now Playing</h3></div>

            
            <audio src={music} ref={ref}  loop />
            
        </Box>
    )
}

export default SoundBar
