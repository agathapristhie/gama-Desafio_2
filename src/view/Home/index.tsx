import React, { useState, useEffect } from 'react';

//import { Redirect } from "react-router-dom";

import Cart from '../../assets/cart.png';

import Pri from '../../assets/Simbolo_Pri.png';

import { Container, Banner} from './style';

import api from '../../services/api';


interface IProduct{
    id:number;
    photo: string;
    name: string;
    description:string;
    sales:string;
    price:number;
    amount:number;
}



const Home: React.FC = () => {
    const[data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

      useEffect(() =>{
        api.get('').then(
            response => {
                setData(response.data)
                
            }
        )
    }, [])

    const handleCart = (index: number) => {
    let product = data[index]
    let push: any = [...cart, cart.push(product)]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }

  /* const getTotalItems = (items: IProduct[]) =>{
    items.reduce((ack: number, item) => ack + item.amount, 0);
  }

  const handleRemoveFromCart = () => null;
 */
 return (
    <Banner>
      <Container>
           
      <div className="nav">
       <div>
          <img src={Pri} alt="Pri" width="200px" height="auto"/>
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
      </div>
      </div>
          <section className="section">
              {
                  data.map((prod, index) => (
                        <div className="product-content" key={prod.id}>
                        <img src= {prod.photo} alt="sapato" width="200" height="auto" className="produtos"/>
                        <h3>{prod.name}</h3>
                        <span>{prod.description}</span>
                        <h4>{prod.sales}</h4>
                        <h5>{prod.price} </h5>
                        <button onClick={ () => handleCart(index)}> Adicionar ao Carrinho </button>
                    </div>
                  ))
              }
             
          </section>
    
    <footer>Todos os direitos reservados. </footer>
    
    </Container>
    </Banner>
  );
}

export default Home;