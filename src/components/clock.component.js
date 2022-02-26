import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

const ClockComponent = () => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [time, setTime] = useState(new Date());
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    useEffect(() => {

        const interval = setInterval(
            () => setTime(new Date()), 1000
        );


        const month = time.getMonth();
        const day = time.getDay();
        const date = time.getDate();
        const hours = time.getHours();
        const hoursForClock = hours >= 13 ? hours % 12 : hours;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const hourEl = document.getElementById('hourEl');
        const minuteEl = document.getElementById('minuteEl');
        const secondEl = document.getElementById('secondEl');
        const timeEl = document.getElementById('timeEl');
        const dateEl = document.getElementById('dateEl');

        hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
        minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
        secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

        timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
        dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;



        return () => {
            clearInterval(interval);
        }




    }, [time]);

    const [toggleLight, setToggleLight] = useState(false);



    function toggleHandler() {
        setToggleLight(!toggleLight)
    }



    return (



        <Home toggleLight={toggleLight}>
            <HomepageWrapper
                toggleLight={toggleLight}>
                <ToggleButton
                    toggleLight={toggleLight}

                    onClick={toggleHandler}>{toggleLight ? 'Light Mode' : ' Dark Mode'}</ToggleButton>
                <ClockContainer>
                    <Clock>
                        {/* <Needle /> */}
                        <HourNeedle id='hourEl' toggleLight={toggleLight} />
                        <MinuteNeedle id='minuteEl' toggleLight={toggleLight} />
                        <SecondNeedle id='secondEl' />

                        <CenterPoint></CenterPoint>
                    </Clock>

                    <Time id='timeEl' toggleLight={toggleLight}>12:00</Time>
                    <DateDiv id='dateEl'>Monday, Nov <span>2</span></DateDiv>
                </ClockContainer>

            </HomepageWrapper>
        </Home>

    )
}

export default ClockComponent;


const NeedleStyles = css`
background-color:#000;
position: absolute;
top:50%;
left:50%;
height:65px;
width:3px;
transform-origin: bottom center;
`;



const ClockContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Clock = styled.div`
position: relative;
width: 200px;
height:200px;


`;



const HourNeedle = styled.div`
${NeedleStyles};
background-color:${props => props.toggleLight === true ? '#15f4ee' : '#000'};
transition: all 0.5s ease-in;

`;

const MinuteNeedle = styled.div`
${NeedleStyles};
background-color:${props => props.toggleLight === true ? '#15f4ee' : '#000'};
transition: all 0.5s ease-in;

height:100px;
`;

const SecondNeedle = styled.div`
${NeedleStyles};

height:100px;
background-color: #e74c3c;
`;

const CenterPoint = styled.div`
background-color:#e74c3c ;
width:10px;
height:10px;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
border-radius: 50%;


::after{
    content:'';
    background-color:#000 ;
width:5px;
height:5px;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
border-radius: 50%;
}
`;

const Time = styled.div`
font-size:60px;
color:${props => props.toggleLight === true ? '#15f4ee' : '#333'};
transition: all 0.5s ease-in;
`;

const DateDiv = styled.div`
color:#aaa;
font-size:14px;
letter-spacing: 0.3px;
text-transform: uppercase;


span{
    background-color: #000;
    color:#fff;
    border-radius: 50%;
    height:18px;
    width:18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 18px;
    transition: all 0.5s ease-in;
    font-size: 12px;
}
`;

const Home = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100vw;
height:100vh;
background-color: ${props => props.toggleLight === true ? "#000" : "#fff"};
transition: all 0.5s ease-in;

`;

const HomepageWrapper = styled.div`
transition: all 0.5s ease-in;
display: flex;

background-color: ${props => props.toggleLight === true ? "#000" : "#fff"};
justify-content: center;
`;




const ToggleButton = styled.button`

background-color: ${props => props.toggleLight === true ? "#fff" : "#000"};
color: ${props => props.toggleLight === true ? "#333" : "#fff"};
border: 0;
border-radius: 4px;
padding: 8px 12px;
position:absolute;
top:100px;
cursor:pointer;

transition: all 0.5s ease-in;
&:focus{
    outline:none;
    
}
`;