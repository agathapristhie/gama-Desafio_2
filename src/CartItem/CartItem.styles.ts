import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
border-bottom: 1px solid #add8e6;
padding-bottom: 20px;

.information, .buttons{
    display:flex;
    justify-content:space-between;
}

img{
    max-width: 80px;
    object-fit:cover;
    margin-left:40px;
}

@media (max-width: 1024px){
    width: 50px;
    padding: 10px;
    img{
        display: none;
    }
    .information, .buttons{
        display:flex;
        justify-content:space-between;
        width: 20px;
    }
    
    }
    

`