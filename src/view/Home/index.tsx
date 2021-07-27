import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import CartImage from '../../assets/cart.png';

import Cart from '../../Cart/Cart';

import Pri from '../../assets/Simbolo_Pri.png';

import { Container, Banner, StyledButton} from './style';

import api from '../../services/api';
import { Drawer} from '@material-ui/core';


interface IProduct{
    id:number;
    photo: string;
    name: string;
    description:string;
    sales:string;
    price:number;
    amount:number;
}

export type CartItemType= IProduct;

const Home: React.FC = () => {
   // const {isLoading, error} = useQuery<IProduct[]>([]);
    const[data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);
   // const {isLoading} = useQuery<CartItemType[]>([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);

   // const [client,setClient] = useState([] as Person[]);
    

      useEffect(() =>{
        api.get('').then(
            response => {
                setData(response.data)
                
            }
        )
    }, [])

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems (prev => {
      //o item já está no carrinho?
      const isIteminCart = prev.find (item => item.id === clickedItem.id)
      let product = data[clickedItem.id]
      let push: any = [...cart, cart.push(product)]
      setCart(push)
      const productStore = JSON.stringify(cart);
      localStorage.setItem('@cart', productStore);
      if(isIteminCart){
        return prev.map(item=>
          item.id === clickedItem.id
          ?{...item, amount:item.amount + 1 }
          :item
        );
       }
       //Primeira vez que o item é adicionado na sacola
       return [...prev, {...clickedItem, amount: 1}];
      });
    }
  
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev=>(
      prev.reduce((ack, item) => {
        if(item.id === id){
          if(item.amount === 1) return ack;
          return [...ack, {...item, amount: item.amount - 1}];
      } else {
       return [...ack, item];
      }

      }, [] as CartItemType[])

    ))
  };

  


   // const clientStore = JSON.stringify(client);
  //  localStorage.setItem('@client', clientStore);
      
  
  // if(isLoading) return (
  
  //   <Loading>
  //     <div className="loadDiv">
  //   <CircularProgress/>
  //   </div>
  //   </Loading>
  // )

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = handleSubmit((clientdata) =>{
    const clientStore = JSON.stringify(clientdata);
    localStorage.setItem('@client', clientStore);
    alert(JSON.stringify(clientdata));
    })

 
  
 
 return (
    <Banner>
      
      <Container>
      <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
        <Cart 
        cartItems={cartItems}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      
      
      <div className="nav">
       <div className="logo">
          <img src={Pri} alt="Pri" width="200px"/>
        </div>
        <StyledButton onClick={()=> setCartOpen(true)}>
        <div className="cart">
          <img src={CartImage} alt="shopcart" width="50px" height="auto" />
          <span>( {getTotalItems(cartItems)} ) - Itens</span>
      </div>
      </StyledButton>
      </div>
      
          <section className="section-prod">
              {
                  data.map((prod) => (
                        <div className="product-content" key={prod.id}>
                        <img src= {prod.photo} alt="sapato" width="200" height="auto" className="produtos"/>
                        <h3>{prod.name}</h3>
                        <span>{prod.description}</span>
                        <h4>{prod.sales}</h4>
                        <h5>R${prod.price} </h5>
                        <button className="button-prod" onClick={ () => handleAddToCart(prod)}> Adicionar ao Carrinho </button>
                    </div>
                  ))
              }
             
          </section>
          <section className="section-container background-section-two">
          <div className="card-container">
                <div id= "content">
                  
                      <form id="form1" onSubmit={onSubmit}>
                        <label> Nome</label>
                      <input
                      {...register("Nome", { required: "Por favor, insira seu nome." })} 
                      />
                      <label> E-mail </label>
                      <input
                      {...register("Email", { required: "Por favor, insira seu e-mail." })} 
                      />
                      <button type="submit">Cadastre-se para receber ofertas!</button>
                  </form>
                  
                  
              </div>
          </div>        
    </section>
    
    <footer>Todos os direitos reservados. </footer>
    
    </Container>
    </Banner>
  );
}

export default Home;