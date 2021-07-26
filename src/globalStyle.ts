import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
}
html{
    scroll-behavior: smooth;
}

footer{
    height: 150 px;
    padding: 25 px;
    text-align: center;
    background-color: #696565;
    color:#ffffff;
    }
body{ 
    background-image: url ('../../assets/bg.jpg');
    width: 100%;
    height: 100%;
    background-repeat: round;
    background-position: center;
    background-size: cover;
    }

`

