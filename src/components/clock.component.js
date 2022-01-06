import React from 'react';

import styled, { css } from 'styled-components';

const ClockComponent = () => {
    return (
        <ClockContainer>
            <Clock>
                {/* <Needle /> */}
                <HourNeedle />
                <MinuteNeedle />
                <SecondNeedle />

                <CenterPoint></CenterPoint>
            </Clock>

            <Time>12:00</Time>
            <DateDiv>Monday, Nov <span>2</span></DateDiv>
        </ClockContainer>
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

// const rootStyles = css`
// color: ${primary} ? '#000' : '#fff';
// `

const primaryColor = '#000';
const secondaryColor = '#fff';

// darkHtml = 
// primaryColor = #fff;
// secondaryColor = #333;
// backgroundColor = #111;
// color:primaryColor

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

const Needle = styled.div`
${NeedleStyles};

`;

const HourNeedle = styled.div`
${NeedleStyles};
transform: translate(-50%, -100%) rotate(15deg);
`;

const MinuteNeedle = styled.div`
${NeedleStyles};
transform: translate(-50%, -100%) rotate(180deg);
height:100px;
`;

const SecondNeedle = styled.div`
${NeedleStyles};
transform: translate(-50%, -100%) rotate(0deg);
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