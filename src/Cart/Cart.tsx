import CartItem from '../CartItem/CartItem';
import {Container} from './Cart.styles';
import {CartItemType} from '../view/Home/index';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
    const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack:number, item) => ack + item.amount*item.price, 0);

    
    return (
        <Container>
            <h2> Seu carrinho de compras </h2>
            {cartItems.length === 0 ? <p> Seu carrinho está vazio!</p>: null}
            {cartItems.map(item =>(
                <CartItem
                key={item.id}
                item= {item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Container>

);
};

export default Cart;

