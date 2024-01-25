import {createGlobalStyle} from 'styled-components';
import React from 'react';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Merriweather', serif;
    }

    body{
        background-color: red;
    }
`;


export default GlobalStyle;