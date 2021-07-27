import styled from 'styled-components';
import image from '../../assets/bg.jpg';
import IconButton from '@material-ui/core/IconButton';

//Estilizacao conforme aula - Douglas Morais

export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
    background-color:#708090;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#ffb3cc;
    .cart{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background: #fff;
    border: 1px solid #add8e6;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .02);
    }

    button{ 
      border-radius: 8px 8px 8px 8px;
    }
    .produtos{
      height: 100%;
      width: 50vh;
      object-fit: cover;
      border-radius: 6px 6px 6px 6px;
    }
    div{
      font-family: Arial, Helvetica, sans-serif;
      padding: 1rem;
      height: 100%;
    }
    
@media (max-width: 1024px){
section {
    padding: 15px 15px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 20px rgba(0, 0, 0, .16);
}
}
  }
`
//Papel de Parede
export const Banner = styled.body`
  background-image: url(${image});
  width: 100%;
  height: 100%;
  background-repeat: round;
  background-position: center;
  background-size: cover;`

export const Loading = styled.div`
background-color: #eedae5;
background-repeat: round;
background-position: center;
width: 100%;
height: 100vh;
background-size: cover;

.loadDiv{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`
export const StyledButton = styled(IconButton)`
position: fixed;
z-index: 100;
right: 20px;
top: 20px;
`