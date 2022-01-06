import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import ClockComponent from '../components/clock.component';

const HomePage = () => {

    const [toggleLight, setToggleLight] = useState(true);



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
                <ClockComponent />

            </HomepageWrapper>
        </Home>
    )
}

export default HomePage


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

const darkMode = css`
background-color: '#000',
color: '#fff'
`;

const lightMode = css`
background-color:'#fff';
color:'#000';

`;



const ToggleButton = styled.button`

background-color: ${props => props.toggleLight === true ? "#fff" : "#000"};
color: ${props => props.toggleLight === true ? "#000" : "#fff"};
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